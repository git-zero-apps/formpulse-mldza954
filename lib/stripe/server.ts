import Stripe from "stripe";

/**
 * Lazy Stripe client — initialized on first use, not at import time.
 * This prevents build failures when STRIPE_SECRET_KEY isn't set
 * during `next build` (it's a runtime-only env var).
 */
let _stripe: Stripe | null = null;

export function getStripe(): Stripe {
  if (!_stripe) {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) throw new Error("STRIPE_SECRET_KEY is not set");
    _stripe = new Stripe(key, { typescript: true });
  }
  return _stripe;
}
