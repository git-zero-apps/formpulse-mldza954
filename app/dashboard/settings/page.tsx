import { createClient } from "@/lib/supabase/server";

export default async function SettingsPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="mt-1 text-sm text-gray-500">Manage your account preferences.</p>
      </div>

      <div className="card">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Account</h2>
        <div className="space-y-4">
          <div>
            <span className="label">Email</span>
            <p className="text-sm text-gray-900">{user?.email}</p>
          </div>
          <div>
            <span className="label">User ID</span>
            <p className="text-xs text-gray-500 font-mono">{user?.id}</p>
          </div>
          <div>
            <span className="label">Last Sign In</span>
            <p className="text-sm text-gray-900">{user?.last_sign_in_at ? new Date(user.last_sign_in_at).toLocaleDateString() : "N/A"}</p>
          </div>
        </div>
      </div>

      <div className="card mt-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Danger Zone</h2>
        <p className="text-sm text-gray-500 mb-4">Permanently delete your account and all associated data.</p>
        <button className="btn-danger" disabled>
          Delete Account
        </button>
      </div>
    </div>
  );
}
