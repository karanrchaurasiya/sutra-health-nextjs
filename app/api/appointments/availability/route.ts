import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;

export async function GET(request: NextRequest) {
  try {
    // --------------------------------------------------
    // Environment variables
    // --------------------------------------------------

    if (!supabaseUrl || !supabaseSecretKey) {
      return NextResponse.json(
        {
          success: false,
          error: "Supabase environment variables are missing.",
        },
        { status: 500 }
      );
    }

    // Server-side Supabase client
    const supabase = createClient(
      supabaseUrl,
      supabaseSecretKey,
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      }
    );

    // --------------------------------------------------
    // Get date from URL
    // --------------------------------------------------

    const { searchParams } = new URL(request.url);
    const date = searchParams.get("date");

    if (!date) {
      return NextResponse.json(
        {
          success: false,
          error: "Date is required.",
        },
        { status: 400 }
      );
    }

    // --------------------------------------------------
    // Validate date
    // --------------------------------------------------

    const selectedDate = new Date(`${date}T00:00:00`);

    if (Number.isNaN(selectedDate.getTime())) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid date.",
        },
        { status: 400 }
      );
    }

    // --------------------------------------------------
    // JavaScript day:
    //
    // Sunday    = 0
    // Monday    = 1
    // Tuesday   = 2
    // Wednesday = 3
    // Thursday  = 4
    // Friday    = 5
    // Saturday  = 6
    // --------------------------------------------------

    const dayOfWeek = selectedDate.getDay();

    // --------------------------------------------------
    // Get doctor's schedule
    // --------------------------------------------------

    const {
      data: schedules,
      error: scheduleError,
    } = await supabase
      .from("availability_schedule")
      .select(
        "day_of_week, start_time, end_time, slot_duration_minutes, active"
      )
      .eq("day_of_week", dayOfWeek)
      .eq("active", true)
      .order("start_time", {
        ascending: true,
      });

    if (scheduleError) {
      console.error(
        "Schedule error:",
        scheduleError
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "Unable to load doctor's availability.",
        },
        { status: 500 }
      );
    }

    // --------------------------------------------------
    // No availability
    // --------------------------------------------------

    if (!schedules || schedules.length === 0) {
      return NextResponse.json({
        success: true,
        date,
        dayOfWeek,
        schedule: [],
        bookedSlots: [],
        slots: [],
        message:
          "No availability configured for this day.",
      });
    }

    // --------------------------------------------------
    // Get existing appointments
    // --------------------------------------------------

    const {
      data: appointments,
      error: appointmentsError,
    } = await supabase
      .from("appointments")
      .select(
        "appointment_time, status"
      )
      .eq("appointment_date", date)
      .neq("status", "cancelled");

    if (appointmentsError) {
      console.error(
        "Appointments error:",
        appointmentsError
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "Unable to check existing appointments.",
        },
        { status: 500 }
      );
    }

    // --------------------------------------------------
    // Store booked times
    // --------------------------------------------------

    const bookedSlots = new Set(
      (appointments ?? []).map(
        (appointment) =>
          String(
            appointment.appointment_time
          ).slice(0, 5)
      )
    );

    // --------------------------------------------------
    // Time helpers
    // --------------------------------------------------

    const timeToMinutes = (time: string) => {
      const [hours, minutes] = time
        .slice(0, 5)
        .split(":")
        .map(Number);

      return hours * 60 + minutes;
    };

    const minutesToTime = (
      minutes: number
    ) => {
      const hours = Math.floor(
        minutes / 60
      );

      const mins = minutes % 60;

      return `${String(hours).padStart(
        2,
        "0"
      )}:${String(mins).padStart(
        2,
        "0"
      )}`;
    };

    // --------------------------------------------------
    // Generate slots
    // --------------------------------------------------

    const slots: string[] = [];

    for (const schedule of schedules) {
      const startMinutes =
        timeToMinutes(
          schedule.start_time
        );

      const endMinutes =
        timeToMinutes(
          schedule.end_time
        );

      const slotDuration =
        Number(
          schedule.slot_duration_minutes
        ) || 15;

      for (
        let current = startMinutes;
        current + slotDuration <=
          endMinutes;
        current += slotDuration
      ) {
        const slot =
          minutesToTime(current);

        // Don't show booked slots
        if (!bookedSlots.has(slot)) {
          slots.push(slot);
        }
      }
    }

    // --------------------------------------------------
    // Remove duplicates
    // --------------------------------------------------

    let availableSlots = [
      ...new Set(slots),
    ].sort();

    // --------------------------------------------------
    // Today's date
    // --------------------------------------------------

    const now = new Date();

    const todayString =
      `${now.getFullYear()}-${String(
        now.getMonth() + 1
      ).padStart(2, "0")}-${String(
        now.getDate()
      ).padStart(2, "0")}`;

    // --------------------------------------------------
    // If today:
    // remove times that already passed
    // --------------------------------------------------

    if (date === todayString) {
      const currentMinutes =
        now.getHours() * 60 +
        now.getMinutes();

      availableSlots =
        availableSlots.filter(
          (slot) =>
            timeToMinutes(slot) >
            currentMinutes
        );
    }

    // --------------------------------------------------
    // Return available slots
    // --------------------------------------------------

    return NextResponse.json({
      success: true,
      date,
      dayOfWeek,

      schedule: schedules,

      bookedSlots: [
        ...bookedSlots,
      ],

      slots: availableSlots,
    });
  } catch (error) {
    console.error(
      "Availability API error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Something went wrong.",
      },
      { status: 500 }
    );
  }
}