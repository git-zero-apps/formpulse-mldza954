import { createClient } from "@/lib/supabase/server";
import { getStripe } from "@/lib/stripe/server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { origin } = new URL(request.url);

  // Find Stripe customer by email
  const customers = await getStripe().customers.list({ email: user.email!, limit: 1 });
  const customer = customers.data[0];

  if (!customer) {
    return NextResponse.json({ error: "No billing account found" }, { status: 404 });
  }

  const session = await getStripe().billingPortal.sessions.create({
    customer: customer.id,
    return_url: `${origin}/dashboard/billing`,
  });

  return NextResponse.json({ url: session.url });
}
