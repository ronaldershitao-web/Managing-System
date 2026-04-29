import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

/**
 * ⚠️ IMPORTANT
 * Replace ONLY the anon key below with the ONE correct key from Supabase:
 * Project Settings → API → anon public key
 */
const SUPABASE_URL = "https://qnxiuojefowyzeanfhdz.supabase.co";

const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFueGl1b2plZm93eXplYW5maGR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYzMjY0NjEsImV4cCI6MjA5MTkwMjQ2MX0.JoSrVaT4KewYWoESPkjG5_W65nKdLYdcX7BZeaYK_FM";

export const db = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

/**
 * Optional debug helper (use in browser console)
 */
window.supabaseTest = async function () {
  const { data, error } = await db.from("groups").select("*");
  console.log("TEST GROUPS:", data, error);
};
