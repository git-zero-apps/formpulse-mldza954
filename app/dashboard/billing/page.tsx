"use client";

import { useState } from "react";

export default function BillingPage() {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async (priceId: string) => {
    setLoading(true);
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ priceId }),
    });
    const { url, error } = await response.json();
    if (error) { alert(error); setLoading(false); return; }
    if (url) window.location.href = url;
  };

  const handleManageBilling = async () => {
    setLoading(true);
    const response = await fetch("/api/billing-portal", { method: "POST" });
    const { url, error } = await response.json();
    if (error) { alert(error); setLoading(false); return; }
    if (url) window.location.href = url;
  };

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Billing</h1>
        <p className="mt-1 text-sm text-gray-500">Manage your subscription and billing information.</p>
      </div>

      <div className="card mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Current Plan</h2>
            <p className="text-sm text-gray-500 mt-1">You&apos;re on the free plan.</p>
          </div>
          <button onClick={handleManageBilling} disabled={loading} className="btn-secondary">
            Manage Billing
          </button>
        </div>
      </div>

      <h2 className="text-lg font-semibold text-gray-900 mb-4">Upgrade your plan</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="card hover:border-brand-300 transition-colors cursor-pointer" onClick={() => handleCheckout("price_starter")}>
          <h3 className="font-semibold text-gray-900">Starter</h3>
          <p className="text-3xl font-bold mt-2">$25<span className="text-sm font-normal text-gray-500">/mo</span></p>
          <ul className="mt-4 space-y-2 text-sm text-gray-600">
            <li>&#10003; More features</li>
            <li>&#10003; Priority support</li>
            <li>&#10003; Custom domain</li>
          </ul>
          <button disabled={loading} className="btn-primary w-full mt-6">
            {loading ? "Loading..." : "Upgrade to Starter"}
          </button>
        </div>
        <div className="card hover:border-brand-300 transition-colors cursor-pointer" onClick={() => handleCheckout("price_growth")}>
          <h3 className="font-semibold text-gray-900">Growth</h3>
          <p className="text-3xl font-bold mt-2">$100<span className="text-sm font-normal text-gray-500">/mo</span></p>
          <ul className="mt-4 space-y-2 text-sm text-gray-600">
            <li>&#10003; Everything in Starter</li>
            <li>&#10003; Unlimited usage</li>
            <li>&#10003; White-label</li>
          </ul>
          <button disabled={loading} className="btn-primary w-full mt-6">
            {loading ? "Loading..." : "Upgrade to Growth"}
          </button>
        </div>
      </div>
    </div>
  );
}
