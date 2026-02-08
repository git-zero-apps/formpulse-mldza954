"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function NewSurveyPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();

    const record: Record<string, unknown> = {
      user_id: user?.id,
      team_id: formData.get("team_id"),
      title: formData.get("title"),
      description: formData.get("description"),
      status: formData.get("status"),
      share_url: formData.get("share_url"),
      close_date: formData.get("close_date"),
      response_count: formData.get("response_count") ? Number(formData.get("response_count")) : null,
    };

    const { error: insertError } = await supabase.from("surveys").insert(record);

    if (insertError) {
      setError(insertError.message);
      setLoading(false);
    } else {
      router.push("/dashboard/surveys");
      router.refresh();
    }
  };

  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <Link href="/dashboard/surveys" className="text-sm text-gray-500 hover:text-gray-700 mb-2 inline-flex items-center gap-1">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Back to Surveys
        </Link>
        <h1 className="text-2xl font-bold text-gray-900 mt-2">Add Survey</h1>
      </div>

      {error && (
        <div className="mb-6 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="card space-y-6">
        <div>
          <label htmlFor="team_id" className="label">Team Id</label>
          <input id="team_id" name="team_id" type="text" className="input" placeholder="Enter team id" />
        </div>
        <div>
          <label htmlFor="title" className="label">Title</label>
          <input id="title" name="title" type="text" className="input" placeholder="Enter title" required />
        </div>
        <div>
          <label htmlFor="description" className="label">Description</label>
          <textarea id="description" name="description" rows={4} className="input" placeholder="Enter description" />
        </div>
        <div>
          <label htmlFor="status" className="label">Status</label>
          <input id="status" name="status" type="text" className="input" placeholder="Enter status" />
        </div>
        <div>
          <label htmlFor="share_url" className="label">Share Url</label>
          <input id="share_url" name="share_url" type="url" className="input" placeholder="Enter share url" required />
        </div>
        <div>
          <label htmlFor="close_date" className="label">Close Date</label>
          <input id="close_date" name="close_date" type="datetime-local" className="input" placeholder="Enter close date" />
        </div>
        <div>
          <label htmlFor="response_count" className="label">Response Count</label>
          <input id="response_count" name="response_count" type="number" className="input" placeholder="Enter response count" />
        </div>

        <div className="flex items-center gap-3 pt-4 border-t">
          <button type="submit" disabled={loading} className="btn-primary">
            {loading ? "Saving..." : "Create Survey"}
          </button>
          <Link href="/dashboard/surveys" className="btn-secondary">Cancel</Link>
        </div>
      </form>
    </div>
  );
}
