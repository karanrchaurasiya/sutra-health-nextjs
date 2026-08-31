import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL;

const supabasePublishableKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

const supabaseSecretKey =
  process.env.SUPABASE_SECRET_KEY;

export async function PATCH(
  request: NextRequest,
) {
  try {
    // ==================================================
    // ENVIRONMENT VARIABLES
    // ==================================================

    if (
      !supabaseUrl ||
      !supabasePublishableKey ||
      !supabaseSecretKey
    ) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Supabase environment variables are missing.",
        },
        { status: 500 },
      );
    }

    // ==================================================
    // AUTH CLIENT
    // ==================================================

    const authClient = createClient(
      supabaseUrl,
      supabasePublishableKey,
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      },
    );

    // ==================================================
    // GET AUTHORIZATION TOKEN
    // ==================================================

    const authorization =
      request.headers.get("authorization");

    if (!authorization) {
      return NextResponse.json(
        {
          success: false,
          error: "Authentication required.",
        },
        { status: 401 },
      );
    }

    const token =
      authorization.replace(
        /^Bearer\s+/i,
        "",
      );

    if (!token) {
      return NextResponse.json(
        {
          success: false,
          error: "Authentication required.",
        },
        { status: 401 },
      );
    }

    // ==================================================
    // VERIFY USER
    // ==================================================

    const {
      data: { user },
      error: userError,
    } = await authClient.auth.getUser(
      token,
    );

    if (
      userError ||
      !user
    ) {
      console.error(
        "Authentication error:",
        userError,
      );

      return NextResponse.json(
        {
          success: false,
          error: "Unauthorized.",
        },
        { status: 401 },
      );
    }

    // ==================================================
    // READ REQUEST BODY
    // ==================================================

    let body: {
      id?: string;
      status?: string;
    };

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

    const id =
      String(body.id ?? "").trim();

    const status =
      String(body.status ?? "").trim();

    // ==================================================
    // VALIDATE INPUT
    // ==================================================

    if (!id || !status) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Appointment ID and status are required.",
        },
        { status: 400 },
      );
    }

    if (
      status !== "completed" &&
      status !== "cancelled"
    ) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Invalid appointment status.",
        },
        { status: 400 },
      );
    }

    // ==================================================
    // ADMIN/SERVER CLIENT
    // ==================================================

    const adminClient = createClient(
      supabaseUrl,
      supabaseSecretKey,
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      },
    );

    // ==================================================
    // CHECK APPOINTMENT EXISTS
    // ==================================================

    const {
      data: appointment,
      error: appointmentError,
    } = await adminClient
      .from("appointments")
      .select(
        "id, patient_name, status",
      )
      .eq("id", id)
      .maybeSingle();

    if (appointmentError) {
      console.error(
        "Appointment lookup error:",
        appointmentError,
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "Unable to find appointment.",
        },
        { status: 500 },
      );
    }

    if (!appointment) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Appointment not found.",
        },
        { status: 404 },
      );
    }

    // ==================================================
    // PREVENT INVALID STATUS CHANGES
    // ==================================================

    if (
      appointment.status ===
        "cancelled" ||
      appointment.status ===
        "completed"
    ) {
      return NextResponse.json(
        {
          success: false,
          error:
            "This appointment has already been marked as " +
            appointment.status +
            ".",
        },
        { status: 409 },
      );
    }

    // ==================================================
    // UPDATE STATUS
    // ==================================================

    const {
      data: updatedAppointment,
      error: updateError,
    } = await adminClient
      .from("appointments")
      .update({
        status,
      })
      .eq("id", id)
      .select(
        "id, patient_name, status",
      )
      .single();

    if (updateError) {
      console.error(
        "Appointment update error:",
        updateError,
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "Unable to update appointment.",
        },
        { status: 500 },
      );
    }

    // ==================================================
    // SUCCESS
    // ==================================================

    return NextResponse.json(
      {
        success: true,
        message:
          `Appointment marked as ${status}.`,
        appointment:
          updatedAppointment,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error(
      "Appointment status API error:",
      error,
    );

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Something went wrong.",
      },
      { status: 500 },
    );
  }
}