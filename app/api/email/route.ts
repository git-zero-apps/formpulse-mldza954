import { createClient } from "@/lib/supabase/server";
import { sendEmail } from "@/lib/email/send";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { to, subject, html, template, data } = await request.json();

  if (!to || !subject) {
    return NextResponse.json({ error: "Missing required fields: to, subject" }, { status: 400 });
  }

  const result = await sendEmail({
    to,
    subject,
    html: html || `<p>${JSON.stringify(data)}</p>`,
  });

  return NextResponse.json(result);
}
