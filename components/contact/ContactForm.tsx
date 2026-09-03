"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const email = String(form.get("email") || "").trim();
    const message = String(form.get("message") || "").trim();

    if (!name || !message) {
      setStatus("Please add your name and message.");
      return;
    }

    const text = [
      "Hello Sutra Health,",
      "",
      `Name: ${name}`,
      phone ? `Phone / WhatsApp: ${phone}` : "",
      email ? `Email: ${email}` : "",
      "",
      "Message:",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/919013103676?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );

    setStatus("WhatsApp has been opened with your message.");
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="contact-name" className="sr-only">
          Full name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          placeholder="Full name *"
          autoComplete="name"
          className="w-full rounded-2xl border border-[#173F35]/12 bg-white px-4 py-3.5 text-[14px] text-[#173F35] outline-none transition placeholder:text-[#8A9690] focus:border-[#65966F]"
          required
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <input
          name="phone"
          type="tel"
          placeholder="Phone / WhatsApp"
          autoComplete="tel"
          className="w-full rounded-2xl border border-[#173F35]/12 bg-white px-4 py-3.5 text-[14px] text-[#173F35] outline-none transition placeholder:text-[#8A9690] focus:border-[#65966F]"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          autoComplete="email"
          className="w-full rounded-2xl border border-[#173F35]/12 bg-white px-4 py-3.5 text-[14px] text-[#173F35] outline-none transition placeholder:text-[#8A9690] focus:border-[#65966F]"
        />
      </div>

      <textarea
        name="message"
        placeholder="How can we help? *"
        rows={6}
        className="w-full resize-none rounded-2xl border border-[#173F35]/12 bg-white px-4 py-3.5 text-[14px] text-[#173F35] outline-none transition placeholder:text-[#8A9690] focus:border-[#65966F]"
        required
      />

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="rounded-full bg-[#173F35] px-6 py-3.5 text-[13px] font-semibold text-white transition hover:bg-[#12352D]"
        >
          Continue on WhatsApp →
        </button>

        {status && (
          <p aria-live="polite" className="text-[12px] text-[#687A73]">
            {status}
          </p>
        )}
      </div>
    </form>
  );
}
