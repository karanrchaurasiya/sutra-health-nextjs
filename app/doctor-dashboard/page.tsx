"use client";

import {memo, useEffect, useState,} from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
);

type Appointment = {
  id: string;
  patient_name: string;
  patient_email: string;
  patient_phone: string;
  patient_age: number;
  patient_gender: string;
  appointment_date: string;
  appointment_time: string;
  status: string;
  meeting_url: string | null;
};

export default function DoctorDashboard() {
  const router = useRouter();

  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const [search, setSearch] = useState("");
  const [dateFilter, setDateFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  // --------------------------------------------------
  // LOAD APPOINTMENTS
  // --------------------------------------------------

  async function loadAppointments() {
  setLoading(true);
  setError("");

  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      router.replace("/doctor-login");
      return;
    }

    const { data, error: fetchError } = await supabase
      .from("appointments")
      .select(
        `
          id,
          patient_name,
          patient_email,
          patient_phone,
          patient_age,
          patient_gender,
          appointment_date,
          appointment_time,
          status,
          meeting_url
        `,
      )
      .order("appointment_date", {
        ascending: true,
      })
      .order("appointment_time", {
        ascending: true,
      });

    if (fetchError) {
      console.error("Appointments error:", fetchError);
      setError("Unable to load appointments.");
      return;
    }

    setAppointments((data ?? []) as Appointment[]);
  } catch (error) {
    console.error("Dashboard error:", error);
    setError("Unable to load appointments.");
  } finally {
    setLoading(false);
  }
}

  useEffect(() => {
    loadAppointments();
  }, []);

  // --------------------------------------------------
  // LOGOUT
  // --------------------------------------------------

  async function handleLogout() {
    await supabase.auth.signOut();

    router.replace("/doctor-login");
    router.refresh();
  }

  // --------------------------------------------------
  // UPDATE STATUS
  // --------------------------------------------------

  async function updateAppointmentStatus(
    id: string,
    status: "cancelled" | "completed",
  ) {
    const appointment = appointments.find((item) => item.id === id);

    if (!appointment) {
      return;
    }

    if (status === "cancelled") {
      const confirmed = window.confirm(
        `Cancel the appointment for ${appointment.patient_name} at ${formatTime(
          appointment.appointment_time,
        )}?`,
      );

      if (!confirmed) {
        return;
      }
    }

    if (status === "completed") {
      const confirmed = window.confirm(
        `Mark ${appointment.patient_name}'s appointment as completed?`,
      );

      if (!confirmed) {
        return;
      }
    }

    setUpdatingId(id);
    setError("");

    try {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session?.access_token) {
        router.replace("/doctor-login");
        return;
      }

      const response = await fetch("/api/appointments/status", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.access_token}`,
        },
        body: JSON.stringify({
          id,
          status,
        }),
      });

      const contentType = response.headers.get("content-type") || "";

      if (!contentType.includes("application/json")) {
        const text = await response.text();

        console.error("Status API returned non-JSON:", text);

        throw new Error(`Unexpected response (${response.status}).`);
      }

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.error || data.message || "Unable to update appointment.",
        );
      }

      await loadAppointments();
    } catch (error) {
      console.error("Appointment status error:", error);

      setError(
        error instanceof Error
          ? error.message
          : "Unable to update appointment.",
      );
    } finally {
      setUpdatingId(null);
    }
  }

  // --------------------------------------------------
  // DATE
  // --------------------------------------------------

  const today = new Date();

  const todayString = `${today.getFullYear()}-${String(
    today.getMonth() + 1,
  ).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

  // --------------------------------------------------
  // DASHBOARD COUNTS
  // --------------------------------------------------

  const todaysAppointments = appointments.filter(
    (appointment) =>
      appointment.appointment_date === todayString &&
      appointment.status === "confirmed",
  );

  const upcomingAppointments = appointments.filter(
    (appointment) =>
      appointment.appointment_date > todayString &&
      appointment.status === "confirmed",
  );

  // --------------------------------------------------
  // FILTERED APPOINTMENTS
  // --------------------------------------------------

  const filteredAppointments = appointments.filter((appointment) => {
    const query = search.trim().toLowerCase();

    const matchesSearch =
      !query ||
      appointment.patient_name.toLowerCase().includes(query) ||
      appointment.patient_email.toLowerCase().includes(query) ||
      appointment.patient_phone.toLowerCase().includes(query);

    const matchesDate =
      dateFilter === "all" || appointment.appointment_date === dateFilter;

    const matchesStatus =
      statusFilter === "all" || appointment.status === statusFilter;

    return matchesSearch && matchesDate && matchesStatus;
  });

  // --------------------------------------------------
  // FORMAT DATE
  // --------------------------------------------------

  function formatDate(date: string) {
    return new Date(`${date}T00:00:00`).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }

  // --------------------------------------------------
  // FORMAT TIME
  // --------------------------------------------------

  function formatTime(time: string) {
    const [hourString, minuteString] = time.slice(0, 5).split(":");

    const hour = Number(hourString);

    const minute = Number(minuteString);

    const ampm = hour >= 12 ? "PM" : "AM";

    const displayHour = hour % 12 || 12;

    return `${displayHour}:${String(minute).padStart(2, "0")} ${ampm}`;
  }

  // --------------------------------------------------
  // STATUS STYLE
  // --------------------------------------------------

  function statusClass(status: string) {
    if (status === "cancelled") {
      return "bg-red-50 text-red-700";
    }

    if (status === "completed") {
      return "bg-gray-100 text-gray-700";
    }

    return "bg-green-50 text-green-700";
  }

  // --------------------------------------------------
  // LOADING
  // --------------------------------------------------

  if (loading) {
    return (
      <main className="min-h-screen bg-[#FAF8F1] flex items-center justify-center">
        <p className="text-[#687A73]">Loading appointments...</p>
      </main>
    );
  }

  // --------------------------------------------------
  // DASHBOARD
  // --------------------------------------------------

  return (
    <main className="min-h-screen bg-[#FAF8F1]">
      {/* HEADER */}

      <header className="border-b border-[#E5E8E1] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-[#173F35]">
              Doctor Dashboard
            </h1>

            <p className="mt-1 text-sm text-[#687A73]">
              Manage your appointments
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="rounded-xl border border-[#D9DED7] px-4 py-2 text-sm font-medium text-[#36594E] hover:bg-[#F1F4ED]"
          >
            Sign out
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* ERROR */}

        {error && (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        {/* STATS */}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-[#E5E8E1] bg-white p-6">
            <p className="text-sm text-[#687A73]">Today's Appointments</p>

            <p className="mt-2 text-3xl font-bold text-[#173F35]">
              {todaysAppointments.length}
            </p>
          </div>

          <div className="rounded-2xl border border-[#E5E8E1] bg-white p-6">
            <p className="text-sm text-[#687A73]">Upcoming</p>

            <p className="mt-2 text-3xl font-bold text-[#173F35]">
              {upcomingAppointments.length}
            </p>
          </div>

          <div className="rounded-2xl border border-[#E5E8E1] bg-white p-6">
            <p className="text-sm text-[#687A73]">Total Bookings</p>

            <p className="mt-2 text-3xl font-bold text-[#173F35]">
              {appointments.length}
            </p>
          </div>
        </div>

        {/* ALL APPOINTMENTS */}

        <section className="mt-10">
          {/* TITLE + FILTERS */}

          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-xl font-bold text-[#173F35]">
                All Appointments
              </h2>

              <p className="mt-1 text-sm text-[#687A73]">
                {filteredAppointments.length} appointment
                {filteredAppointments.length === 1 ? "" : "s"}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              {/* SEARCH */}

              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search patient..."
                className="w-full rounded-xl border border-[#D9DED7] bg-white px-4 py-3 text-sm text-[#36594E] outline-none placeholder:text-[#9AA7A1] focus:border-[#173F35] sm:w-64"
              />

              {/* DATE */}

              <select
                value={dateFilter}
                onChange={(event) => setDateFilter(event.target.value)}
                className="rounded-xl border border-[#D9DED7] bg-white px-4 py-3 text-sm text-[#36594E] outline-none focus:border-[#173F35]"
              >
                <option value="all">All Dates</option>

                {Array.from(
                  new Set(
                    appointments.map(
                      (appointment) => appointment.appointment_date,
                    ),
                  ),
                )
                  .sort()
                  .map((date) => (
                    <option key={date} value={date}>
                      {formatDate(date)}
                    </option>
                  ))}
              </select>

              {/* STATUS */}

              <select
                value={statusFilter}
                onChange={(event) => setStatusFilter(event.target.value)}
                className="rounded-xl border border-[#D9DED7] bg-white px-4 py-3 text-sm text-[#36594E] outline-none focus:border-[#173F35]"
              >
                <option value="all">All Statuses</option>

                <option value="confirmed">Confirmed</option>

                <option value="completed">Completed</option>

                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>

          {/* APPOINTMENT LIST */}

          <div className="mt-5 space-y-4">
            {filteredAppointments.length === 0 ? (
              <div className="rounded-2xl border border-[#E5E8E1] bg-white p-10 text-center">
                <p className="font-medium text-[#36594E]">
                  No appointments found.
                </p>

                <p className="mt-1 text-sm text-[#687A73]">
                  Try changing your search or filters.
                </p>
              </div>
            ) : (
              filteredAppointments.map((appointment) => (
                <AppointmentCard
                  key={appointment.id}
                  appointment={appointment}
                  formatDate={formatDate}
                  formatTime={formatTime}
                  statusClass={statusClass}
                  updatingId={updatingId}
                  onStatusChange={updateAppointmentStatus}
                />
              ))
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

// ==================================================
// APPOINTMENT CARD
// ==================================================

const AppointmentCard = memo(function AppointmentCard({
  appointment,
  formatDate,
  formatTime,
  statusClass,
  updatingId,
  onStatusChange,
}: {
  appointment: Appointment;
  formatDate: (date: string) => string;
  formatTime: (time: string) => string;
  statusClass: (status: string) => string;
  updatingId: string | null;
  onStatusChange: (
    id: string,
    status: "cancelled" | "completed",
  ) => void;
}) {
  const isUpdating =
    updatingId === appointment.id;

  return (
    <div className="rounded-xl border border-[#E5E8E1] bg-white px-4 py-3">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">

        {/* ==================================================
            APPOINTMENT INFORMATION
        ================================================== */}

        <div className="min-w-0 flex-1">

          {/* DATE / TIME / STATUS */}

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">

            <span className="font-semibold text-[#173F35]">
              {formatDate(
                appointment.appointment_date,
              )}
            </span>

            <span className="font-semibold text-[#173F35]">
              {formatTime(
                appointment.appointment_time,
              )}
            </span>

            <span
              className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${statusClass(
                appointment.status,
              )}`}
            >
              {appointment.status}
            </span>

          </div>

          {/* PATIENT DETAILS */}

          <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1">

            <span className="font-medium text-[#36594E]">
              {appointment.patient_name}
            </span>

            <span className="hidden text-[#C4CCC7] sm:inline">
              •
            </span>

            <span className="max-w-[260px] truncate text-sm text-[#687A73]">
              {appointment.patient_email}
            </span>

            <span className="hidden text-[#C4CCC7] sm:inline">
              •
            </span>

            <span className="text-sm text-[#687A73]">
              {appointment.patient_phone}
            </span>

            <span className="hidden text-[#C4CCC7] sm:inline">
              •
            </span>

            <span className="text-sm text-[#687A73]">
              Age {appointment.patient_age}
              {" · "}
              {appointment.patient_gender}
            </span>

          </div>

        </div>

        {/* ==================================================
            ACTIONS
        ================================================== */}

        <div className="flex shrink-0 flex-wrap gap-2">

          {/* JOIN */}

          {appointment.status ===
            "confirmed" &&
            appointment.meeting_url && (
              <a
                href={
                  appointment.meeting_url
                }
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-[#173F35] px-3.5 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90"
              >
                Join
              </a>
            )}

          {/* COMPLETED */}

          {appointment.status ===
            "confirmed" && (
            <button
              type="button"
              onClick={() =>
                onStatusChange(
                  appointment.id,
                  "completed",
                )
              }
              disabled={isUpdating}
              className="rounded-lg border border-[#D9DED7] px-3.5 py-2 text-xs font-semibold text-[#36594E] transition-colors hover:bg-[#F1F4ED] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isUpdating
                ? "Updating..."
                : "Completed"}
            </button>
          )}

          {/* CANCEL */}

          {appointment.status ===
            "confirmed" && (
            <button
              type="button"
              onClick={() =>
                onStatusChange(
                  appointment.id,
                  "cancelled",
                )
              }
              disabled={isUpdating}
              className="rounded-lg border border-red-200 px-3.5 py-2 text-xs font-semibold text-red-700 transition-colors hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Cancel
            </button>
          )}

        </div>

      </div>
    </div>
  );
});
