"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter, useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function EditResponsPage() {
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [record, setRecord] = useState<Record<string, unknown> | null>(null);
  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    async function fetchRecord() {
      const supabase = createClient();
      const { data, error } = await supabase
        .from("responses")
        .select("*")
        .eq("id", params.id)
        .single();

      if (error) setError(error.message);
      else setRecord(data);
      setFetching(false);
    }
    fetchRecord();
  }, [params.id]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const supabase = createClient();

    const updates: Record<string, unknown> = {
      survey_id: formData.get("survey_id"),
      respondent_email: formData.get("respondent_email"),
      completion_status: formData.get("completion_status"),
      submitted_at: formData.get("submitted_at"),
    };

    const { error: updateError } = await supabase
      .from("responses")
      .update(updates)
      .eq("id", params.id);

    if (updateError) {
      setError(updateError.message);
      setLoading(false);
    } else {
      router.push("/dashboard/responses");
      router.refresh();
    }
  };

  if (fetching) {
    return (
      <div className="flex items-center justify-center py-24">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-brand-200 border-t-brand-600" />
      </div>
    );
  }

  if (!record) {
    return (
      <div className="rounded-lg bg-red-50 border border-red-200 p-4">
        <p className="text-sm text-red-700">Respons not found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <Link href="/dashboard/responses" className="text-sm text-gray-500 hover:text-gray-700 mb-2 inline-flex items-center gap-1">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Back to Responses
        </Link>
        <h1 className="text-2xl font-bold text-gray-900 mt-2">Edit Respons</h1>
      </div>

      {error && (
        <div className="mb-6 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="card space-y-6">
        <div>
          <label htmlFor="survey_id" className="label">Survey Id</label>
          <input id="survey_id" name="survey_id" type="text" className="input" defaultValue={String(record.survey_id ?? "")} required />
        </div>
        <div>
          <label htmlFor="respondent_email" className="label">Respondent Email</label>
          <input id="respondent_email" name="respondent_email" type="email" className="input" defaultValue={String(record.respondent_email ?? "")} />
        </div>
        <div>
          <label htmlFor="completion_status" className="label">Completion Status</label>
          <input id="completion_status" name="completion_status" type="text" className="input" defaultValue={String(record.completion_status ?? "")} />
        </div>
        <div>
          <label htmlFor="submitted_at" className="label">Submitted At</label>
          <input id="submitted_at" name="submitted_at" type="datetime-local" className="input" defaultValue={String(record.submitted_at ?? "")} />
        </div>

        <div className="flex items-center gap-3 pt-4 border-t">
          <button type="submit" disabled={loading} className="btn-primary">
            {loading ? "Saving..." : "Update Respons"}
          </button>
          <Link href="/dashboard/responses" className="btn-secondary">Cancel</Link>
        </div>
      </form>
    </div>
  );
}
