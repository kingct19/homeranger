"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/content/site";

type Option = { value: string; label: string };

export function ContactForm({
  cities,
  services,
  topic,
}: {
  cities: Option[];
  services: Option[];
  topic?: string;
}) {
  const [started, setStarted] = useState(false);
  const career = topic === "careers";

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lines = [
      career ? "Career inquiry" : "Service request",
      `Name: ${String(data.get("name") ?? "")}`,
      `Phone: ${String(data.get("phone") ?? "")}`,
      `Email: ${String(data.get("email") ?? "")}`,
      `City: ${String(data.get("city") ?? "")}`,
      `Service: ${String(data.get("service") ?? "")}`,
      "",
      String(data.get("message") ?? ""),
    ];
    const subject = career ? "Career inquiry" : "Service request";
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
    setStarted(true);
  }

  return (
    <form onSubmit={onSubmit} className="panel p-6 md:p-8">
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
      <button type="submit" className="btn btn-primary mt-6">
        Send by email
      </button>
      <p className="mt-3 text-sm leading-relaxed text-mute">
        This opens your email app with the note addressed to {site.email}. We do not store the form on the website.
      </p>
      {started ? (
        <p className="mt-3 text-sm font-semibold text-leaf">
          If your email app did not open, write us directly at {site.email}.
        </p>
      ) : null}
    </form>
  );
}
