import { site } from "@/content/site";

const banner = `${site.url}/opengraph-image`;

export function customerThankYou(name: string) {
  const greeting = name.trim() || "there";
  const safeName = escapeHtml(greeting);
  const subject = "Thank you for choosing Home Ranger Services";

  const text = [
    `Hello ${greeting},`,
    "",
    "Thank you for choosing Home Ranger Services. We will help with the issue and work to bring you comfort at an affordable price.",
    "",
    "Someone from the office will follow up to confirm the next step. This email is not a booked visit until we confirm one.",
    "",
    "If this is urgent, please call the number below.",
    site.phoneDisplay,
    "",
    "Call or email us with any questions.",
    site.phoneDisplay,
    site.email,
    `Open ${site.hours}.`,
    "",
    "Home Ranger Services",
    "Dallas–Fort Worth and Greater Austin",
  ].join("\n");

  const html = `<!DOCTYPE html>
<html lang="en">
  <body style="margin:0;padding:0;background:#eef2f6;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#eef2f6;">
      <tr>
        <td align="center" style="padding:24px 12px;">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background:#ffffff;border:1px solid #e2e8ee;">
            <tr>
              <td style="padding:0;line-height:0;font-size:0;">
                <img src="${banner}" width="600" alt="Home Ranger Services. Heating, cooling, and air quality. Trusted comfort. Stronger homes." style="display:block;width:100%;max-width:600px;height:auto;border:0;" />
              </td>
            </tr>
            <tr>
              <td style="padding:32px 32px 0;font-family:Georgia,'Times New Roman',serif;font-size:28px;line-height:1.25;color:#0A2C5A;">
                Thank you for choosing Home Ranger Services.
              </td>
            </tr>
            <tr>
              <td style="padding:16px 32px 0;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.6;color:#243044;">
                Hello ${safeName},
              </td>
            </tr>
            <tr>
              <td style="padding:12px 32px 0;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.6;color:#243044;">
                Thank you for choosing Home Ranger Services. We will help with the issue and work to bring you comfort at an affordable price.
              </td>
            </tr>
            <tr>
              <td style="padding:12px 32px 0;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.6;color:#243044;">
                Someone from the office will follow up to confirm the next step. This email is not a booked visit until we confirm one.
              </td>
            </tr>
            <tr>
              <td style="padding:28px 32px 0;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.5;color:#0A2C5A;font-weight:700;">
                If this is urgent, please call the number below.
              </td>
            </tr>
            <tr>
              <td style="padding:8px 32px 0;">
                <a href="tel:${site.phoneTel}" style="font-family:Arial,Helvetica,sans-serif;font-size:28px;line-height:1.2;font-weight:700;color:#FF7A00;text-decoration:none;">${site.phoneDisplay}</a>
              </td>
            </tr>
            <tr>
              <td style="padding:28px 32px 0;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.6;color:#243044;">
                Call or email us with any questions.
              </td>
            </tr>
            <tr>
              <td style="padding:8px 32px 0;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.7;color:#0A2C5A;">
                <a href="tel:${site.phoneTel}" style="color:#0A2C5A;font-weight:700;text-decoration:none;">${site.phoneDisplay}</a><br />
                <a href="mailto:${site.email}" style="color:#0A2C5A;text-decoration:none;">${site.email}</a><br />
                Open ${site.hours}.
              </td>
            </tr>
            <tr>
              <td style="padding:28px 32px 32px;font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:1.6;color:#6b7684;">
                Home Ranger Services<br />
                Dallas–Fort Worth and Greater Austin
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  return { subject, html, text };
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
