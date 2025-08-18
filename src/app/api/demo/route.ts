// src/app/api/demo/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "");

type DemoPayload = {
  fullName?: string;
  email?: string;
  company?: string;
  preferredDateISO: string; // "YYYY-MM-DD"
  preferredTime: string; // "HH:mm" (24h, user’s local)
  timezone?: string; // e.g. "Europe/London"
  notes?: string;
  altTimes?: string[];
};

export async function POST(req: Request) {
  try {
    const data = (await req.json()) as DemoPayload;

    if (!data.preferredDateISO || !data.preferredTime) {
      return NextResponse.json(
        { ok: false, error: "Missing date or time" },
        { status: 400 }
      );
    }

    const tz =
      data.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone;

    const html = `
      <h2>New Live Demo Request</h2>
      <p><b>Name:</b> ${esc(data.fullName || "—")}</p>
      <p><b>Email:</b> ${esc(data.email || "—")}</p>
      <p><b>Company:</b> ${esc(data.company || "—")}</p>
      <p><b>Preferred date:</b> ${esc(data.preferredDateISO)}</p>
      <p><b>Preferred time:</b> ${esc(data.preferredTime)} (${esc(tz)})</p>
      ${
        data.altTimes?.length
          ? `<p><b>Alternate times:</b> ${data.altTimes
              .map(esc)
              .join(", ")}</p>`
          : ""
      }
      ${
        data.notes
          ? `<p><b>Notes:</b><br/>${esc(data.notes).replace(
              /\n/g,
              "<br/>"
            )}</p>`
          : ""
      }
    `;

    await resend.emails.send({
      from: process.env.FROM_EMAIL!, // e.g. noreply@arbieter.com
      to: process.env.NOTIFY_TO!, // your inbox
      replyTo: data.email, // so replies go to the requester
      subject: "Live Demo request",
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    const msg = error instanceof Error ? error.message : "Failed to send";
    return NextResponse.json({ ok: false, error: msg }, { status: 500 });
  }
}

function esc(s?: string) {
  if (!s) return "";
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
