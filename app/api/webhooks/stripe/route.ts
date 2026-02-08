import { getStripe } from "@/lib/stripe/server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.text();
  const signature = request.headers.get("stripe-signature");

  if (!signature || !process.env.STRIPE_WEBHOOK_SECRET) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  let event;
  try {
    event = getStripe().webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("Webhook signature verification failed:", message);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object;
      const userId = session.metadata?.user_id;
      console.log("Checkout completed for user:", userId);
      // TODO: Update user's subscription status in database
      break;
    }
    case "customer.subscription.updated": {
      const subscription = event.data.object;
      console.log("Subscription updated:", subscription.id, "Status:", subscription.status);
      // TODO: Update subscription status in database
      break;
    }
    case "customer.subscription.deleted": {
      const subscription = event.data.object;
      console.log("Subscription cancelled:", subscription.id);
      // TODO: Downgrade user in database
      break;
    }
    case "invoice.payment_failed": {
      const invoice = event.data.object;
      console.log("Payment failed for invoice:", invoice.id);
      // TODO: Notify user of failed payment
      break;
    }
    default:
      console.log("Unhandled event type:", event.type);
  }

  return NextResponse.json({ received: true });
}
