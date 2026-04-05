import { createClient, SupabaseClient } from "@supabase/supabase-js";

let _client: SupabaseClient | null = null;

export function supabaseAdmin(): SupabaseClient {
  if (_client) return _client;

  const url = (process.env.NEXT_PUBLIC_SUPABASE_URL || "").trim();
  const key = (process.env.SUPABASE_SERVICE_KEY || "").trim();

  if (!url || !key) {
    throw new Error("Supabase URL oder Service Key fehlt in den Environment Variables");
  }

  _client = createClient(url, key, {
    auth: { persistSession: false },
  });

  return _client;
}
