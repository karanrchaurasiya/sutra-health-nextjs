import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import nodemailer from "nodemailer";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SECRET_KEY;

const gmailUser = process.env.GMAIL_USER;
const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
const doctorEmail = process.env.DOCTOR_EMAIL;

type AppointmentBody = {
  name?: string;
  email?: string;
  phone?: string;
  gender?: string;
  age?: string | number;
  date?: string;
  time?: string;
};

type Schedule = {
  day_of_week: number;
  start_time: string;
  end_time: string;
  slot_duration_minutes: number | null;
  active: boolean;
};

/**
 * Escape values before inserting them into HTML emails.
 */
function escapeHtml(value: string | number): string {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Convert HH:MM into minutes.
 */
function timeToMinutes(value: string): number {
  const [hours, minutes] = value
    .slice(0, 5)
    .split(":")
    .map(Number);

  return hours * 60 + minutes;
}

/**
 * Format date for India.
 */
function formatDate(dateString: string): string {
  return new Date(`${dateString}T00:00:00`).toLocaleDateString(
    "en-IN",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    },
  );
}

/**
 * Format HH:MM into 12-hour time.
 */
function formatTime(timeString: string): string {
  const [hourString, minuteString] = timeString.split(":");

  const hour = Number(hourString);
  const minute = Number(minuteString);

  const ampm = hour >= 12 ? "PM" : "AM";
  const displayHour = hour % 12 || 12;

  return `${displayHour}:${String(minute).padStart(
    2,
    "0",
  )} ${ampm}`;
}

/**
 * POST /api/appointments
 */
export async function POST(request: NextRequest) {
  try {
    // ==================================================
    // ENVIRONMENT VARIABLES
    // ==================================================

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Supabase environment variables are missing.",
        },
        { status: 500 },
      );
    }

    if (
      !gmailUser ||
      !gmailAppPassword ||
      !doctorEmail
    ) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Gmail email environment variables are missing.",
        },
        { status: 500 },
      );
    }

    // ==================================================
    // SUPABASE
    // ==================================================

    const supabase = createClient(
      supabaseUrl,
      supabaseKey,
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      },
    );

    // ==================================================
    // GMAIL SMTP
    // ==================================================

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,

      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },

      // Helps avoid IPv6 SMTP connection problems
      // on some serverless environments.
      family: 4,

      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 15000,

      tls: {
        rejectUnauthorized: true,
      },
    });

    // ==================================================
    // READ REQUEST
    // ==================================================

    let body: AppointmentBody;

    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid request body.",
        },
        { status: 400 },
      );
    }

    const {
      name,
      email,
      phone,
      gender,
      age,
      date,
      time,
    } = body;

    // ==================================================
    // REQUIRED FIELDS
    // ==================================================

    if (
      !name ||
      !email ||
      !phone ||
      !gender ||
      age === undefined ||
      age === null ||
      !date ||
      !time
    ) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Please provide all required appointment information.",
        },
        { status: 400 },
      );
    }

    // ==================================================
    // CLEAN VALUES
    // ==================================================

    const patientName = String(name).trim();
    const patientEmail = String(email).trim();
    const patientPhone = String(phone).trim();
    const patientGender = String(gender).trim();
    const patientAge = Number(age);
    const appointmentDate = String(date).trim();
    const appointmentTime = String(time).trim();

    // ==================================================
    // VALIDATE AGE
    // ==================================================

    if (
      !Number.isInteger(patientAge) ||
      patientAge < 1 ||
      patientAge > 120
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Please enter a valid age.",
        },
        { status: 400 },
      );
    }

    // ==================================================
    // VALIDATE EMAIL
    // ==================================================

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(patientEmail)) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Please enter a valid email address.",
        },
        { status: 400 },
      );
    }

    // ==================================================
    // VALIDATE DATE
    // ==================================================

    if (
      !/^\d{4}-\d{2}-\d{2}$/.test(
        appointmentDate,
      )
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid appointment date.",
        },
        { status: 400 },
      );
    }

    const selectedDate = new Date(
      `${appointmentDate}T00:00:00`,
    );

    if (
      Number.isNaN(selectedDate.getTime())
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid appointment date.",
        },
        { status: 400 },
      );
    }

    // ==================================================
    // VALIDATE TIME
    // ==================================================

    if (
      !/^\d{2}:\d{2}$/.test(
        appointmentTime,
      )
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid appointment time.",
        },
        { status: 400 },
      );
    }

    const [hours, minutes] =
      appointmentTime
        .split(":")
        .map(Number);

    if (
      hours < 0 ||
      hours > 23 ||
      minutes < 0 ||
      minutes > 59
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid appointment time.",
        },
        { status: 400 },
      );
    }

    // ==================================================
    // PREVENT PAST DATES
    // ==================================================

    const now = new Date();

    const todayString =
      `${now.getFullYear()}-${String(
        now.getMonth() + 1,
      ).padStart(2, "0")}-${String(
        now.getDate(),
      ).padStart(2, "0")}`;

    if (appointmentDate < todayString) {
      return NextResponse.json(
        {
          success: false,
          error:
            "You cannot book an appointment for a past date.",
        },
        { status: 400 },
      );
    }

    // ==================================================
    // DAY OF WEEK
    // ==================================================

    const dayOfWeek =
      selectedDate.getDay();

    // ==================================================
    // CHECK DOCTOR AVAILABILITY
    // ==================================================

    const {
      data: schedules,
      error: scheduleError,
    } = await supabase
      .from("availability_schedule")
      .select(
        "day_of_week, start_time, end_time, slot_duration_minutes, active",
      )
      .eq("day_of_week", dayOfWeek)
      .eq("active", true)
      .order("start_time", {
        ascending: true,
      });

    if (scheduleError) {
      console.error(
        "Schedule lookup error:",
        scheduleError,
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "Unable to verify doctor's availability.",
        },
        { status: 500 },
      );
    }

    if (
      !schedules ||
      schedules.length === 0
    ) {
      return NextResponse.json(
        {
          success: false,
          error:
            "The doctor is not available on the selected date.",
        },
        { status: 409 },
      );
    }

    // ==================================================
    // VERIFY VALID SLOT
    // ==================================================

    const requestedMinutes =
      timeToMinutes(appointmentTime);

    const validSchedule =
      (schedules as Schedule[]).find(
        (schedule) => {
          const startMinutes =
            timeToMinutes(
              schedule.start_time,
            );

          const endMinutes =
            timeToMinutes(
              schedule.end_time,
            );

          const duration =
            Number(
              schedule.slot_duration_minutes,
            ) || 15;

          return (
            requestedMinutes >=
              startMinutes &&
            requestedMinutes + duration <=
              endMinutes &&
            (requestedMinutes -
              startMinutes) %
              duration ===
              0
          );
        },
      );

    if (!validSchedule) {
      return NextResponse.json(
        {
          success: false,
          error:
            "The selected appointment time is not available.",
        },
        { status: 409 },
      );
    }

    // ==================================================
    // IF TODAY, PREVENT PAST TIME
    // ==================================================

    if (appointmentDate === todayString) {
      const currentMinutes =
        now.getHours() * 60 +
        now.getMinutes();

      if (
        requestedMinutes <=
        currentMinutes
      ) {
        return NextResponse.json(
          {
            success: false,
            error:
              "That appointment time has already passed.",
          },
          { status: 409 },
        );
      }
    }

    // ==================================================
    // CHECK EXISTING APPOINTMENT
    // ==================================================

    const {
      data: existingAppointment,
      error: existingError,
    } = await supabase
      .from("appointments")
      .select("id, status")
      .eq(
        "appointment_date",
        appointmentDate,
      )
      .eq(
        "appointment_time",
        appointmentTime,
      )
      .neq("status", "cancelled")
      .limit(1)
      .maybeSingle();

    if (existingError) {
      console.error(
        "Existing appointment error:",
        existingError,
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "Unable to verify the selected appointment time.",
        },
        { status: 500 },
      );
    }

    if (existingAppointment) {
      return NextResponse.json(
        {
          success: false,
          error:
            "This appointment slot has already been booked. Please select another time.",
        },
        { status: 409 },
      );
    }

    // ==================================================
    // CREATE JITSI MEETING
    // ==================================================

    const meetingId =
      `sutra-health-${crypto.randomUUID()}`;

    const meetingUrl =
      `https://meet.jit.si/${meetingId}`;

    // ==================================================
    // INSERT APPOINTMENT
    // ==================================================

    const {
      data: appointment,
      error: insertError,
    } = await supabase
      .from("appointments")
      .insert({
        patient_name: patientName,
        patient_email: patientEmail,
        patient_phone: patientPhone,
        patient_age: patientAge,
        patient_gender: patientGender,
        appointment_date:
          appointmentDate,
        appointment_time:
          appointmentTime,
        status: "confirmed",
        meeting_url: meetingUrl,
      })
      .select()
      .single();

    // ==================================================
    // INSERT ERROR
    // ==================================================

    if (insertError) {
      console.error(
        "Appointment insert error:",
        insertError,
      );

      if (
        insertError.code === "23505"
      ) {
        return NextResponse.json(
          {
            success: false,
            error:
              "This appointment slot was just booked by another patient. Please select another time.",
          },
          { status: 409 },
        );
      }

      return NextResponse.json(
        {
          success: false,
          error: insertError.message,
          code: insertError.code,
          details: insertError.details,
          hint: insertError.hint,
        },
        { status: 500 },
      );
    }

    // ==================================================
    // FORMAT DATE & TIME
    // ==================================================

    const formattedDate =
      formatDate(appointmentDate);

    const formattedTime =
      formatTime(appointmentTime);

    // ==================================================
    // ESCAPE EMAIL VALUES
    // ==================================================

    const safePatientName =
      escapeHtml(patientName);

    const safePatientEmail =
      escapeHtml(patientEmail);

    const safePatientPhone =
      escapeHtml(patientPhone);

    const safePatientGender =
      escapeHtml(patientGender);

    const safePatientAge =
      escapeHtml(patientAge);

    const safeFormattedDate =
      escapeHtml(formattedDate);

    const safeFormattedTime =
      escapeHtml(formattedTime);

    const safeMeetingUrl =
      encodeURI(meetingUrl);

    // ==================================================
    // PATIENT EMAIL
    // ==================================================

    const patientEmailPromise =
      transporter.sendMail({
        from: `"Sutra Health" <${gmailUser}>`,
        to: patientEmail,
        subject:
          "Your Sutra Health Appointment is Confirmed",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #173F35;">
            <div style="padding: 32px 24px; background: #FAF8F1;">

              <h1 style="margin: 0 0 8px; font-size: 28px;">
                Appointment Confirmed
              </h1>

              <p style="color: #687A73; line-height: 1.6;">
                Dear ${safePatientName},
              </p>

              <p style="color: #687A73; line-height: 1.6;">
                Your appointment with Sutra Health has been successfully confirmed.
              </p>

              <div style="margin: 24px 0; padding: 20px; background: #F1F4ED; border-radius: 12px;">

                <p style="margin: 0 0 10px;">
                  <strong>Date:</strong> ${safeFormattedDate}
                </p>

                <p style="margin: 0 0 10px;">
                  <strong>Time:</strong> ${safeFormattedTime}
                </p>

                <p style="margin: 0;">
                  <strong>Consultation:</strong> Online
                </p>

              </div>

              <a
                href="${safeMeetingUrl}"
                style="display: inline-block; padding: 13px 22px; background: #173F35; color: #ffffff; text-decoration: none; border-radius: 24px; font-weight: bold;"
              >
                Join Appointment
              </a>

              <p style="margin-top: 24px; color: #71817A; font-size: 13px; line-height: 1.6;">
                Please keep this email for your appointment details.
              </p>

              <p style="margin-top: 28px; color: #536A62;">
                Regards,<br />
                Sutra Health
              </p>

            </div>
          </div>
        `,
      });

    // ==================================================
    // DOCTOR EMAIL
    // ==================================================

    const doctorEmailPromise =
      transporter.sendMail({
        from: `"Sutra Health" <${gmailUser}>`,
        to: doctorEmail,
        subject:
          `New Appointment — ${patientName}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; color: #173F35;">
            <div style="padding: 32px 24px; background: #FAF8F1;">

              <h1 style="margin: 0 0 8px; font-size: 28px;">
                New Appointment
              </h1>

              <p style="color: #687A73; line-height: 1.6;">
                A new appointment has been booked through the Sutra Health website.
              </p>

              <div style="margin: 24px 0; padding: 20px; background: #F1F4ED; border-radius: 12px;">

                <h2 style="font-size: 18px; margin: 0 0 16px;">
                  Patient Details
                </h2>

                <p style="margin: 0 0 8px;">
                  <strong>Name:</strong> ${safePatientName}
                </p>

                <p style="margin: 0 0 8px;">
                  <strong>Email:</strong> ${safePatientEmail}
                </p>

                <p style="margin: 0 0 8px;">
                  <strong>Phone:</strong> ${safePatientPhone}
                </p>

                <p style="margin: 0 0 8px;">
                  <strong>Age:</strong> ${safePatientAge}
                </p>

                <p style="margin: 0 0 8px;">
                  <strong>Gender:</strong> ${safePatientGender}
                </p>

                <p style="margin: 0 0 8px;">
                  <strong>Date:</strong> ${safeFormattedDate}
                </p>

                <p style="margin: 0;">
                  <strong>Time:</strong> ${safeFormattedTime}
                </p>

              </div>

              <a
                href="${safeMeetingUrl}"
                style="display: inline-block; padding: 13px 22px; background: #173F35; color: #ffffff; text-decoration: none; border-radius: 24px; font-weight: bold;"
              >
                Open Meeting
              </a>

              <p style="margin-top: 24px; color: #71817A; font-size: 13px;">
                Appointment ID: ${appointment.id}
              </p>

            </div>
          </div>
        `,
      });

    // ==================================================
    // SEND BOTH EMAILS IN PARALLEL
    // ==================================================

    const [
      patientResult,
      doctorResult,
    ] = await Promise.allSettled([
      patientEmailPromise,
      doctorEmailPromise,
    ]);

    const patientEmailStatus =
      patientResult.status === "fulfilled"
        ? "sent"
        : "failed";

    const doctorEmailStatus =
      doctorResult.status === "fulfilled"
        ? "sent"
        : "failed";

    // ==================================================
    // EMAIL LOGS
    // ==================================================

    if (
      patientResult.status ===
      "fulfilled"
    ) {
      console.log(
        "PATIENT EMAIL SENT:",
        patientEmail,
      );
    } else {
      console.error(
        "PATIENT EMAIL FAILED:",
        patientResult.reason,
      );
    }

    if (
      doctorResult.status ===
      "fulfilled"
    ) {
      console.log(
        "DOCTOR EMAIL SENT:",
        doctorEmail,
      );
    } else {
      console.error(
        "DOCTOR EMAIL FAILED:",
        doctorResult.reason,
      );
    }

    // ==================================================
    // SUCCESS
    // ==================================================

    return NextResponse.json(
      {
        success: true,

        message:
          "Appointment booked successfully.",

        emailStatus: {
          patient:
            patientEmailStatus,
          doctor:
            doctorEmailStatus,
        },

        appointment: {
          id: appointment.id,
          name: patientName,
          email: patientEmail,
          phone: patientPhone,
          patient_age: patientAge,
          gender: patientGender,
          date: appointmentDate,
          time: appointmentTime,
          status: appointment.status,
          meeting_url: meetingUrl,
        },
      },
      { status: 201 },
    );
  } catch (error) {
    console.error(
      "Appointment API error:",
      error,
    );

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Unable to create appointment.",
      },
      { status: 500 },
    );
  }
}