import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#faf7f2] text-gray-900 min-h-screen relative">
        <div className="pointer-events-none fixed inset-0 z-0" style={{ backgroundImage: "radial-gradient(ellipse 60% 40% at 30% 10%, hsla(var(--brand-hue), 60%, 80%, 0.2), transparent), radial-gradient(ellipse 40% 30% at 70% 80%, hsla(35, 60%, 85%, 0.15), transparent)" }} />
      <div className="relative z-10">
      {/* Nav */}
      <nav className="animate-fade-in sticky top-0 z-50 bg-[#faf7f2]/80 backdrop-blur-xl border-b border-amber-200/30">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <span className="text-xl font-display font-extrabold text-gray-900">Formpulse</span>
          <div className="flex items-center gap-6">
            <Link href="#features" className="hidden sm:block text-sm text-gray-600 hover:text-gray-900 transition">
              Features
            </Link>
            <Link href="/login" className="text-sm text-gray-600 hover:text-gray-900 transition">
              Log In
            </Link>
            <Link
              href="/login"
              className="rounded-lg px-4 py-2 text-sm font-medium bg-brand-600 text-white hover:bg-brand-500 shadow-lg shadow-brand-600/20 transition-all"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero — Center Stage */}
      <section className="relative mx-auto max-w-4xl px-6 pt-24 pb-32 text-center">
        <div className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-brand-300/40 bg-brand-50 px-4 py-1.5 text-brand-700 text-sm">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-500 animate-pulse" />
          Now in beta
        </div>
        <h1 className="animate-fade-up [animation-delay:150ms] font-display text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl" style={{ lineHeight: "1.08" }}>
          Formpulse
        </h1>
        <p className="animate-fade-up [animation-delay:350ms] mt-6 text-lg text-gray-600 sm:text-xl max-w-2xl mx-auto leading-relaxed">
          Simple survey builder for individuals and small teams
        </p>
        <div className="animate-fade-up [animation-delay:500ms] mt-10 flex items-center justify-center gap-4">
          <Link
            href="/login"
            className="rounded-lg px-8 py-3.5 text-base font-semibold bg-brand-600 text-white hover:bg-brand-500 shadow-lg shadow-brand-600/20 transition-all"
          >
            Start Free Trial
          </Link>
          <Link
            href="#features"
            className="rounded-lg px-8 py-3.5 text-base font-semibold border border-gray-300 bg-white text-gray-700 hover:border-brand-300 hover:bg-gray-50 transition-all"
          >
            See How It Works
          </Link>
        </div>
      </section>

      {/* Social Proof */}
      <section className="animate-fade-up [animation-delay:700ms] mx-auto max-w-4xl px-6 pb-20">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-60">
          <span className="text-sm font-medium tracking-wider uppercase text-gray-600">Trusted by teams at</span>
          <span className="text-sm text-gray-600">Acme Corp</span>
          <span className="text-sm text-gray-600">&bull;</span>
          <span className="text-sm text-gray-600">Globex</span>
          <span className="text-sm text-gray-600">&bull;</span>
          <span className="text-sm text-gray-600">Initech</span>
          <span className="text-sm text-gray-600">&bull;</span>
          <span className="text-sm text-gray-600">Umbrella</span>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-[#f5f0e8] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center font-display text-3xl font-bold text-gray-900 mb-4">Everything you need</h2>
          <p className="text-center text-gray-600 mb-16 max-w-xl mx-auto">
            Powerful features designed to help you succeed.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="group rounded-2xl bg-white shadow-sm border border-amber-200/40 hover:border-brand-300 transition-colors p-8">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">survey-builder</h3>
            <p className="mt-2 text-sm text-gray-600">Manage your survey-builder with ease using our intuitive interface.</p>
          </div>
          <div className="group rounded-2xl bg-white shadow-sm border border-amber-200/40 hover:border-brand-300 transition-colors p-8">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">drag-drop-editor</h3>
            <p className="mt-2 text-sm text-gray-600">Manage your drag-drop-editor with ease using our intuitive interface.</p>
          </div>
          <div className="group rounded-2xl bg-white shadow-sm border border-amber-200/40 hover:border-brand-300 transition-colors p-8">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">question-types</h3>
            <p className="mt-2 text-sm text-gray-600">Manage your question-types with ease using our intuitive interface.</p>
          </div>
          <div className="group rounded-2xl bg-white shadow-sm border border-amber-200/40 hover:border-brand-300 transition-colors p-8">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">public-sharing</h3>
            <p className="mt-2 text-sm text-gray-600">Manage your public-sharing with ease using our intuitive interface.</p>
          </div>
          <div className="group rounded-2xl bg-white shadow-sm border border-amber-200/40 hover:border-brand-300 transition-colors p-8">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">response-dashboard</h3>
            <p className="mt-2 text-sm text-gray-600">Manage your response-dashboard with ease using our intuitive interface.</p>
          </div>
          <div className="group rounded-2xl bg-white shadow-sm border border-amber-200/40 hover:border-brand-300 transition-colors p-8">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">csv-export</h3>
            <p className="mt-2 text-sm text-gray-600">Manage your csv-export with ease using our intuitive interface.</p>
          </div>
          <div className="group rounded-2xl bg-white shadow-sm border border-amber-200/40 hover:border-brand-300 transition-colors p-8">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">team-collaboration</h3>
            <p className="mt-2 text-sm text-gray-600">Manage your team-collaboration with ease using our intuitive interface.</p>
          </div>
          <div className="group rounded-2xl bg-white shadow-sm border border-amber-200/40 hover:border-brand-300 transition-colors p-8">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">subscription-tiers</h3>
            <p className="mt-2 text-sm text-gray-600">Manage your subscription-tiers with ease using our intuitive interface.</p>
          </div>
          <div className="group rounded-2xl bg-white shadow-sm border border-amber-200/40 hover:border-brand-300 transition-colors p-8">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">real-time-updates</h3>
            <p className="mt-2 text-sm text-gray-600">Manage your real-time-updates with ease using our intuitive interface.</p>
          </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-3xl font-bold text-gray-900 sm:text-4xl">
            Ready to get started?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
            Join thousands of teams who use Formpulse to work smarter.
          </p>
          <div className="mt-10">
            <Link
              href="/login"
              className="inline-block rounded-lg px-10 py-4 text-base font-semibold bg-brand-600 text-white hover:bg-brand-500 shadow-lg shadow-brand-600/20 transition-all"
            >
              Start Your Free Trial
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#f5f0e8] border-t border-amber-200/30 py-12">
        <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Formpulse. All rights reserved.</span>
          <span className="text-xs text-gray-500">Built with <a href="https://usezero.co" className="text-brand-500 hover:text-brand-400 transition">ZERO</a></span>
        </div>
      </footer>
      </div>
    </div>
  );
}
