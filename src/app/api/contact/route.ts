import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "");

type ContactPayload = {
  fullName: string;
  email: string;
  company: string;
  role?: string;
  phone?: string;
  services?: string[];
  industry?: string;
  timeline?: string;
  budget?: string;
  summary?: string;
};

// ✅ Handle POST /api/contact
export async function POST(req: Request) {
  try {
    const data = (await req.json()) as ContactPayload;

    // simple validation
    if (!data.fullName || !data.email || !data.company) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // build HTML email body
    const html = `
      <h2>New Inquiry</h2>
      <p><b>Name:</b> ${escapeHtml(data.fullName)}</p>
      <p><b>Email:</b> ${escapeHtml(data.email)}</p>
      <p><b>Company:</b> ${escapeHtml(data.company)}</p>
      <p><b>Role:</b> ${escapeHtml(data.role || "")}</p>
      <p><b>Phone:</b> ${escapeHtml(data.phone || "")}</p>
      <p><b>Services:</b> ${
        (data.services || []).map(escapeHtml).join(", ") || "—"
      }</p>
      <p><b>Industry:</b> ${escapeHtml(data.industry || "")}</p>
      <p><b>Timeline:</b> ${escapeHtml(data.timeline || "")}</p>
      <p><b>Budget:</b> ${escapeHtml(data.budget || "")}</p>
      <p><b>Summary:</b><br/>${escapeHtml(data.summary || "").replace(
        /\n/g,
        "<br/>"
      )}</p>
    `;

    // ✅ send email with Resend
    await resend.emails.send({
      from: process.env.FROM_EMAIL!, // e.g. "Arbieter <noreply@arbieter.com>"
      to: process.env.NOTIFY_TO!, // your inbox
      replyTo: data.email, // sender's email
      subject: `New inquiry: ${data.fullName} (${data.company})`,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error sending email:", error);

    const message = error instanceof Error ? error.message : "Failed to send";

    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}

// helper: escape HTML safely
function escapeHtml(str?: string) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
