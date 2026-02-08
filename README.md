# Formpulse

Simple survey builder for individuals and small teams

Built with [ZERO](https://usezero.co) — describe your business, get a running app.

## Tech Stack

- **Frontend:** Next.js 14 (App Router) + TypeScript
- **Database:** Supabase (PostgreSQL + RLS)
- **Auth:** Supabase Auth (google + email)
- **Hosting:** Vercel
- **Styling:** Tailwind CSS
- **Payments:** Stripe

## Getting Started

```bash
npm install
cp .env.local.example .env.local
# Fill in your Supabase keys
npm run dev
```

## Database

Run the migration in `supabase/migrations/001_initial_schema.sql` against your Supabase project.

## Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon/public key |
| `STRIPE_SECRET_KEY` | Stripe secret key |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe publishable key |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook signing secret |
