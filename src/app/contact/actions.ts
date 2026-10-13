"use server";

import { site } from "@/content/site";
import { customerThankYou } from "@/lib/customer-email";

export type InquiryResult = { ok: true } | { ok: false; error: string };

const failure = `We could not send that. Call ${site.phoneDisplay} or email ${site.email}.`;

export async function submitInquiry(formData: FormData): Promise<InquiryResult> {
  if (String(formData.get("company") ?? "").trim()) {
    return { ok: true };
  }

  const career = String(formData.get("topic") ?? "") === "careers";
  const name = line(formData.get("name"), 120);
  const phone = line(formData.get("phone"), 40);
  const email = line(formData.get("email"), 200);
  const city = line(formData.get("city"), 80);
  const service = line(formData.get("service"), 120);
  const message = String(formData.get("message") ?? "")
    .replace(/\0/g, "")
    .trim()
    .slice(0, 4000);

  if (!name || !phone || !email || !city || !service || !message) {
    return { ok: false, error: "Fill in every field, then send it again." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Enter an email address we can reply to." };
  }

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    return { ok: false, error: failure };
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Home Ranger Services <notifications@homerangerservices.com>",
      to: [site.email],
      reply_to: email,
      subject: career ? `Career inquiry from ${name}` : `Service request from ${name}`,
      text: [
        career ? "Career inquiry" : "Service request",
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        `City: ${city}`,
        `Service: ${service}`,
        "",
        message,
      ].join("\n"),
    }),
  });

  if (!response.ok) {
    return { ok: false, error: failure };
  }

  if (!career) {
    const thankYou = customerThankYou(name);
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Home Ranger Services <notifications@homerangerservices.com>",
        to: [email],
        reply_to: site.email,
        subject: thankYou.subject,
        html: thankYou.html,
        text: thankYou.text,
      }),
    });
  }

  return { ok: true };
}

function line(value: FormDataEntryValue | null, max: number) {
  return String(value ?? "")
    .replace(/[\r\n\0]/g, " ")
    .trim()
    .slice(0, max);
}
