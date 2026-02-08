"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function NewAnswerPage() {
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
      response_id: formData.get("response_id"),
      question_id: formData.get("question_id"),
      answer_value: formData.get("answer_value"),
    };

    const { error: insertError } = await supabase.from("answers").insert(record);

    if (insertError) {
      setError(insertError.message);
      setLoading(false);
    } else {
      router.push("/dashboard/answers");
      router.refresh();
    }
  };

  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <Link href="/dashboard/answers" className="text-sm text-gray-500 hover:text-gray-700 mb-2 inline-flex items-center gap-1">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Back to Answers
        </Link>
        <h1 className="text-2xl font-bold text-gray-900 mt-2">Add Answer</h1>
      </div>

      {error && (
        <div className="mb-6 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="card space-y-6">
        <div>
          <label htmlFor="response_id" className="label">Response Id</label>
          <input id="response_id" name="response_id" type="text" className="input" placeholder="Enter response id" required />
        </div>
        <div>
          <label htmlFor="question_id" className="label">Question Id</label>
          <input id="question_id" name="question_id" type="text" className="input" placeholder="Enter question id" required />
        </div>
        <div>
          <label htmlFor="answer_value" className="label">Answer Value</label>
          <input id="answer_value" name="answer_value" type="text" className="input" placeholder="Enter answer value" required />
        </div>

        <div className="flex items-center gap-3 pt-4 border-t">
          <button type="submit" disabled={loading} className="btn-primary">
            {loading ? "Saving..." : "Create Answer"}
          </button>
          <Link href="/dashboard/answers" className="btn-secondary">Cancel</Link>
        </div>
      </form>
    </div>
  );
}
