import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// POST /api/subscribe
export async function POST(req: Request) {
  try {
    const { email, name = "" } = await req.json();

    // basic validation
    const isEmail =
      typeof email === "string" &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

    if (!isEmail) {
      return NextResponse.json(
        { ok: false, error: "Valid email is required" },
        { status: 400 }
      );
    }

    const safeEmail = escapeHtml(email.trim());
    const safeName = escapeHtml(name || "");

    const html = `
      <h2>New Newsletter Subscription</h2>
      <p><b>Email:</b> ${safeEmail}</p>
      <p><b>Name:</b> ${safeName || "—"}</p>
      <p>The user would like to subscribe to the newsletter.</p>
    `;

    await resend.emails.send({
      from: process.env.FROM_EMAIL!, // e.g. "Arbieter <noreply@arbieter.com>"
      to: process.env.NOTIFY_TO!, // your inbox
      replyTo: email, // so you can reply if you want
      subject: "Newsletter subscription request",
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Subscribe error:", err);
    return NextResponse.json(
      { ok: false, error: "Failed to send subscription email" },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
