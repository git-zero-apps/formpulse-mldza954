import { createClient } from "@/lib/supabase/server";
import { getStripe } from "@/lib/stripe/server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { priceId } = await request.json();

  if (!priceId) {
    return NextResponse.json({ error: "Price ID is required" }, { status: 400 });
  }

  const { origin } = new URL(request.url);

  const session = await getStripe().checkout.sessions.create({
    customer_email: user.email!,
    metadata: { user_id: user.id },
    line_items: [{ price: priceId, quantity: 1 }],
    mode: "subscription",
    success_url: `${origin}/dashboard?checkout=success`,
    cancel_url: `${origin}/dashboard/billing?checkout=cancelled`,
  });

  return NextResponse.json({ url: session.url });
}
