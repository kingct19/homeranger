"use client";

import { useState, type FormEvent } from "react";
import { submitInquiry } from "@/app/contact/actions";
import { site } from "@/content/site";

type Option = { value: string; label: string };
type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm({
  cities,
  services,
  topic,
}: {
  cities: Option[];
  services: Option[];
  topic?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const career = topic === "careers";

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");
    const result = await submitInquiry(new FormData(event.currentTarget));
    if (result.ok) {
      setStatus("sent");
      event.currentTarget.reset();
      return;
    }
    setStatus("error");
    setError(result.error);
  }

  return (
    <form onSubmit={onSubmit} className="panel relative p-6 md:p-8">
      <input type="hidden" name="topic" value={career ? "careers" : "service"} />
      <div className="absolute -left-[9999px] h-0 overflow-hidden" aria-hidden="true">
        <label>
          Company website
          <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      {career ? (
        <p className="mb-5 rounded-xl bg-cream px-4 py-3 text-sm leading-relaxed">
          This note goes to the office as a career inquiry. Tell us which metro you want to work in and the license you hold or are working toward.
        </p>
      ) : null}
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block text-sm font-semibold">
          Name
          <input
            name="name"
            required
            autoComplete="name"
            className="mt-1 w-full rounded-xl border border-line bg-white px-3 py-3 font-normal"
          />
        </label>
        <label className="block text-sm font-semibold">
          Phone
          <input
            name="phone"
            required
            autoComplete="tel"
            className="mt-1 w-full rounded-xl border border-line bg-white px-3 py-3 font-normal"
          />
        </label>
        <label className="block text-sm font-semibold">
          Email
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-1 w-full rounded-xl border border-line bg-white px-3 py-3 font-normal"
          />
        </label>
        <label className="block text-sm font-semibold">
          City
          <select
            name="city"
            required
            defaultValue=""
            className="mt-1 w-full rounded-xl border border-line bg-white px-3 py-3 font-normal"
          >
            <option value="" disabled>
              Select a city
            </option>
            {cities.map((city) => (
              <option key={city.value} value={city.label}>
                {city.label}
              </option>
            ))}
            <option value="Other">Other North or Central Texas</option>
          </select>
        </label>
        <label className="block text-sm font-semibold md:col-span-2">
          What do you need?
          <select
            name="service"
            required
            defaultValue={career ? "Careers" : ""}
            className="mt-1 w-full rounded-xl border border-line bg-white px-3 py-3 font-normal"
          >
            <option value="" disabled>
              Select a service
            </option>
            {career ? <option value="Careers">Careers</option> : null}
            {services.map((service) => (
              <option key={service.value} value={service.label}>
                {service.label}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-semibold md:col-span-2">
          What is going on?
          <textarea
            name="message"
            required
            rows={5}
            className="mt-1 w-full rounded-xl border border-line bg-white px-3 py-3 font-normal"
            placeholder={career ? "License, experience, and the metro you want." : "Rooms affected, what the system is doing, and when it started."}
          />
        </label>
      </div>
      <button type="submit" className="btn btn-primary mt-6" disabled={status === "sending"}>
        {status === "sending" ? "Sending" : "Send"}
      </button>
      <p className="mt-3 text-sm leading-relaxed text-mute">
        This sends the note to {site.email}. It is a request, not a booked appointment, until we confirm one.
      </p>
      <div aria-live="polite">
        {status === "sent" ? (
          <p className="mt-3 text-sm font-semibold text-leaf">
            Received. We will reply at the email you entered, or call the number you gave us.
          </p>
        ) : null}
        {status === "error" ? <p className="mt-3 text-sm font-semibold text-navy">{error}</p> : null}
      </div>
    </form>
  );
}
