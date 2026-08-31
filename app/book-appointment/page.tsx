"use client";

import { useEffect, useMemo, useState } from "react";
import Container from "@/components/shared/Container";

type FormData = {
  name: string;
  email: string;
  phone: string;
  gender: string;
  age: string;
  date: string;
  time: string;
};

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  gender: "",
  age: "",
  date: "",
  time: "",
};

export default function BookAppointmentPage() {
  const [form, setForm] = useState<FormData>(initialForm);

  const [slots, setSlots] = useState<string[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [slotError, setSlotError] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // Today's date in local time
  const today = useMemo(() => {
    const now = new Date();

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }, []);

  // Load slots whenever date changes
  useEffect(() => {
    if (!form.date) {
      setSlots([]);
      return;
    }

    const loadSlots = async () => {
      setLoadingSlots(true);
      setSlotError("");
      setSlots([]);

      // Clear previously selected time
      setForm((previous) => ({
        ...previous,
        time: "",
      }));

      try {
        const response = await fetch(
          `/api/appointments/availability?date=${encodeURIComponent(
            form.date
          )}`,
          {
            cache: "no-store",
          }
        );

        /*
         * Do not blindly call response.json().
         * If the API returns an HTML error page, JSON parsing
         * would produce:
         * Unexpected token '<'
         */
        const contentType = response.headers.get("content-type") || "";

        if (!contentType.includes("application/json")) {
          const text = await response.text();

          console.error("Availability API returned non-JSON:", text);

          throw new Error(
            `Availability API returned an unexpected response (${response.status}).`
          );
        }

        const data = await response.json();

        if (!response.ok || !data.success) {
          throw new Error(
            data.error ||
              data.message ||
              "Unable to load available slots."
          );
        }

        /*
         * IMPORTANT:
         * The API returns:
         *
         * {
         *   success: true,
         *   slots: [...]
         * }
         *
         * So we must use data.slots.
         */
        setSlots(Array.isArray(data.slots) ? data.slots : []);
      } catch (error) {
        console.error("Availability error:", error);

        setSlots([]);

        setSlotError(
          error instanceof Error
            ? error.message
            : "Unable to load available appointment times. Please try again."
        );
      } finally {
        setLoadingSlots(false);
      }
    };

    loadSlots();
  }, [form.date]);

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (success) {
      setSuccess(false);
    }

    if (slotError) {
      setSlotError("");
    }
  };

  const formatTime = (time: string) => {
    const [hoursString, minutesString] = time.split(":");

    const hours = Number(hoursString);
    const minutes = Number(minutesString);

    const suffix = hours >= 12 ? "PM" : "AM";
    const displayHour = hours % 12 || 12;

    return `${displayHour}:${String(minutes).padStart(
      2,
      "0"
    )} ${suffix}`;
  };

 const handleSubmit = async (
  event: React.FormEvent<HTMLFormElement>
) => {
  event.preventDefault();

  if (!form.time) {
    setSlotError("Please select an appointment time.");
    return;
  }

  setSubmitting(true);
  setSlotError("");
  setSuccess(false);

  try {
    const response = await fetch("/api/appointments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const contentType =
      response.headers.get("content-type") || "";

    if (!contentType.includes("application/json")) {
      const text = await response.text();

      console.error(
        "Booking API returned non-JSON:",
        text
      );

      throw new Error(
        `Booking API returned an unexpected response (${response.status}).`
      );
    }

    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(
        data.error ||
          data.message ||
          "Unable to create appointment."
      );
    }

    // ==========================================
    // BOOKING SUCCESS
    // ==========================================

    setSuccess(true);
    setSlotError("");

    // Clear ALL form inputs
    setForm({
      name: "",
      email: "",
      phone: "",
      gender: "",
      age: "",
      date: "",
      time: "",
    });

    // Clear available slots
    setSlots([]);

  } catch (error) {
    console.error("Booking error:", error);

    setSlotError(
      error instanceof Error
        ? error.message
        : "Something went wrong. Please try again."
    );
  } finally {
    setSubmitting(false);
  }
};

  return (
    <main className="min-h-screen bg-[#FAF8F1]">
      {/* ================= HERO ================= */}
      <section className="border-b border-[#173F35]/10 py-14 sm:py-18 lg:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">
              Book an appointment
            </p>

            <h1 className="mt-4 font-serif text-4xl leading-[1.05] tracking-[-0.04em] text-[#123F35] sm:text-5xl lg:text-6xl">
              Start with a conversation
              <br />
              about your health.
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-6 text-[#687A73] sm:text-[15px] sm:leading-7">
              Choose a convenient date and available time to connect
              with our health team.
            </p>
          </div>
        </Container>
      </section>

      {/* ================= BOOKING ================= */}
      <section className="bg-[#F1F4ED] py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="mx-auto max-w-5xl">
            <div className="overflow-hidden rounded-[28px] border border-[#173F35]/10 bg-white shadow-[0_20px_60px_rgba(23,63,53,0.07)]">
              <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
                {/* ================= LEFT ================= */}
                <div className="bg-[#173F35] p-7 text-[#FAF8F1] sm:p-9 lg:p-10">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B5CEB6]">
                    Your appointment
                  </p>

                  <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
                    One step toward better health.
                  </h2>

                  <p className="mt-5 text-sm leading-6 text-[#CBDAD1]">
                    Tell us a little about yourself and choose a
                    convenient appointment time.
                  </p>

                  <div className="mt-9 space-y-5">
                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                        ✓
                      </div>

                      <div>
                        <p className="text-sm font-semibold">
                          Personalized conversation
                        </p>

                        <p className="mt-1 text-xs leading-5 text-[#BFD1C6]">
                          Discuss your health goals and concerns.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                        ◷
                      </div>

                      <div>
                        <p className="text-sm font-semibold">
                          Flexible appointment times
                        </p>

                        <p className="mt-1 text-xs leading-5 text-[#BFD1C6]">
                          Select from the doctor's available slots.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                        ↗
                      </div>

                      <div>
                        <p className="text-sm font-semibold">
                          Online consultation
                        </p>

                        <p className="mt-1 text-xs leading-5 text-[#BFD1C6]">
                          Meeting details will be provided after
                          confirmation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ================= FORM ================= */}
                <div className="p-7 sm:p-9 lg:p-10">
                  <form onSubmit={handleSubmit}>
                    <div className="grid gap-5 sm:grid-cols-2">
                      {/* Name */}
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="name"
                          className="text-xs font-semibold text-[#36594E]"
                        >
                          Full name
                        </label>

                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={form.name}
                          onChange={handleChange}
                          required
                          autoComplete="name"
                          placeholder="Enter your full name"
                          className="mt-2 w-full rounded-xl border border-[#173F35]/10 bg-[#FCFCF8] px-4 py-3 text-sm text-[#173F35] outline-none transition focus:border-[#65966F] focus:ring-2 focus:ring-[#65966F]/10"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="email"
                          className="text-xs font-semibold text-[#36594E]"
                        >
                          Email address
                        </label>

                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          autoComplete="email"
                          placeholder="you@example.com"
                          className="mt-2 w-full rounded-xl border border-[#173F35]/10 bg-[#FCFCF8] px-4 py-3 text-sm text-[#173F35] outline-none transition focus:border-[#65966F] focus:ring-2 focus:ring-[#65966F]/10"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label
                          htmlFor="phone"
                          className="text-xs font-semibold text-[#36594E]"
                        >
                          Phone number
                        </label>

                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          required
                          autoComplete="tel"
                          placeholder="+91 98765 43210"
                          className="mt-2 w-full rounded-xl border border-[#173F35]/10 bg-[#FCFCF8] px-4 py-3 text-sm text-[#173F35] outline-none transition focus:border-[#65966F] focus:ring-2 focus:ring-[#65966F]/10"
                        />
                      </div>

                      {/* Gender */}
                      <div>
                        <label
                          htmlFor="gender"
                          className="text-xs font-semibold text-[#36594E]"
                        >
                          Gender
                        </label>

                        <select
                          id="gender"
                          name="gender"
                          value={form.gender}
                          onChange={handleChange}
                          required
                          className="mt-2 w-full rounded-xl border border-[#173F35]/10 bg-[#FCFCF8] px-4 py-3 text-sm text-[#173F35] outline-none transition focus:border-[#65966F] focus:ring-2 focus:ring-[#65966F]/10"
                        >
                          <option value="">
                            Select gender
                          </option>

                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>

                          <option value="Prefer not to say">
                            Prefer not to say
                          </option>
                        </select>
                      </div>

                      {/* Age */}
                      <div>
                        <label
                          htmlFor="age"
                          className="text-xs font-semibold text-[#36594E]"
                        >
                          Age
                        </label>

                        <input
                          id="age"
                          name="age"
                          type="number"
                          min="1"
                          max="120"
                          value={form.age}
                          onChange={handleChange}
                          required
                          inputMode="numeric"
                          placeholder="Your age"
                          className="mt-2 w-full rounded-xl border border-[#173F35]/10 bg-[#FCFCF8] px-4 py-3 text-sm text-[#173F35] outline-none transition focus:border-[#65966F] focus:ring-2 focus:ring-[#65966F]/10"
                        />
                      </div>

                      {/* Date */}
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="date"
                          className="text-xs font-semibold text-[#36594E]"
                        >
                          Select date
                        </label>

                        <input
                          id="date"
                          name="date"
                          type="date"
                          min={today}
                          value={form.date}
                          onChange={handleChange}
                          required
                          className="mt-2 w-full rounded-xl border border-[#173F35]/10 bg-[#FCFCF8] px-4 py-3 text-sm text-[#173F35] outline-none transition focus:border-[#65966F] focus:ring-2 focus:ring-[#65966F]/10"
                        />
                      </div>
                    </div>

                    {/* ================= SLOTS ================= */}
                    <div className="mt-7">
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-semibold text-[#36594E]">
                          Available times
                        </label>

                        {loadingSlots && (
                          <span className="text-[11px] text-[#71817A]">
                            Loading...
                          </span>
                        )}
                      </div>

                      {!form.date && (
                        <div className="mt-3 rounded-xl border border-dashed border-[#173F35]/15 bg-[#FAF8F1] px-4 py-5 text-center text-xs text-[#71817A]">
                          Select a date to see available times.
                        </div>
                      )}

                      {form.date &&
                        !loadingSlots &&
                        slots.length === 0 &&
                        !slotError && (
                          <div className="mt-3 rounded-xl border border-[#173F35]/10 bg-[#FAF8F1] px-4 py-5 text-center text-xs leading-5 text-[#71817A]">
                            No appointment times are available for
                            this date. Please choose another date.
                          </div>
                        )}

                      {slots.length > 0 && (
                        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
                          {slots.map((slot) => {
                            const selected = form.time === slot;

                            return (
                              <button
                                key={slot}
                                type="button"
                                disabled={submitting}
                                onClick={() => {
                                  setForm((previous) => ({
                                    ...previous,
                                    time: slot,
                                  }));

                                  setSlotError("");
                                }}
                                className={`rounded-xl border px-3 py-3 text-sm font-medium transition ${
                                  selected
                                    ? "border-[#173F35] bg-[#173F35] text-white"
                                    : "border-[#173F35]/10 bg-[#FCFCF8] text-[#36594E] hover:border-[#65966F]/40 hover:bg-[#F1F4ED]"
                                } disabled:cursor-not-allowed disabled:opacity-50`}
                              >
                                {formatTime(slot)}
                              </button>
                            );
                          })}
                        </div>
                      )}

                      {slotError && (
                        <p className="mt-3 rounded-xl bg-[#FFF3F0] px-4 py-3 text-xs text-[#A64B3C]">
                          {slotError}
                        </p>
                      )}
                    </div>

                    {/* ================= SELECTED TIME ================= */}
                    {form.time && (
                      <div className="mt-5 rounded-xl border border-[#65966F]/20 bg-[#EAF1E7] px-4 py-3">
                        <p className="text-xs text-[#536A62]">
                          Selected appointment time
                        </p>

                        <p className="mt-1 text-sm font-semibold text-[#173F35]">
                          {formatTime(form.time)}
                        </p>
                      </div>
                    )}

                    {/* ================= SUCCESS ================= */}
                   {success && (
  <div className="mt-6 rounded-2xl border border-[#65966F]/20 bg-[#EAF1E7] p-5">
    <div className="flex items-start gap-3">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#65966F] text-sm font-bold text-white">
        ✓
      </div>

      <div>
        <p className="font-semibold text-[#173F35]">
          Appointment confirmed
        </p>

        <p className="mt-1 text-xs leading-5 text-[#536A62]">
          Your appointment has been successfully
          booked. Confirmation details have been
          sent to your email.
        </p>
      </div>
    </div>
  </div>
)}

                    {/* ================= SUBMIT ================= */}
                    <button
                      type="submit"
                      disabled={
                        submitting ||
                        loadingSlots ||
                        !form.time
                      }
                      className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-[#173F35] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0D332C] disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {submitting
                        ? "Confirming appointment..."
                        : "Confirm Appointment →"}
                    </button>

                    <p className="mt-4 text-center text-[10px] leading-5 text-[#89958F]">
                      Your information is used only to manage your
                      appointment and provide relevant communication.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}