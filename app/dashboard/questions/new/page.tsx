"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function NewQuestionPage() {
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
      survey_id: formData.get("survey_id"),
      question_text: formData.get("question_text"),
      question_type: formData.get("question_type"),
      options: formData.get("options"),
      is_required: formData.get("is_required") === "on",
      order_index: formData.get("order_index") ? Number(formData.get("order_index")) : null,
    };

    const { error: insertError } = await supabase.from("questions").insert(record);

    if (insertError) {
      setError(insertError.message);
      setLoading(false);
    } else {
      router.push("/dashboard/questions");
      router.refresh();
    }
  };

  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <Link href="/dashboard/questions" className="text-sm text-gray-500 hover:text-gray-700 mb-2 inline-flex items-center gap-1">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Back to Questions
        </Link>
        <h1 className="text-2xl font-bold text-gray-900 mt-2">Add Question</h1>
      </div>

      {error && (
        <div className="mb-6 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="card space-y-6">
        <div>
          <label htmlFor="survey_id" className="label">Survey Id</label>
          <input id="survey_id" name="survey_id" type="text" className="input" placeholder="Enter survey id" required />
        </div>
        <div>
          <label htmlFor="question_text" className="label">Question Text</label>
          <input id="question_text" name="question_text" type="text" className="input" placeholder="Enter question text" required />
        </div>
        <div>
          <label htmlFor="question_type" className="label">Question Type</label>
          <input id="question_type" name="question_type" type="text" className="input" placeholder="Enter question type" required />
        </div>
        <div>
          <label htmlFor="options" className="label">Options</label>
          <input id="options" name="options" type="text" className="input" placeholder="Enter options" />
        </div>
        <div className="flex items-center gap-3">
          <input id="is_required" name="is_required" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500" />
          <label htmlFor="is_required" className="text-sm font-medium text-gray-700">Is Required</label>
        </div>
        <div>
          <label htmlFor="order_index" className="label">Order Index</label>
          <input id="order_index" name="order_index" type="number" className="input" placeholder="Enter order index" required />
        </div>

        <div className="flex items-center gap-3 pt-4 border-t">
          <button type="submit" disabled={loading} className="btn-primary">
            {loading ? "Saving..." : "Create Question"}
          </button>
          <Link href="/dashboard/questions" className="btn-secondary">Cancel</Link>
        </div>
      </form>
    </div>
  );
}
