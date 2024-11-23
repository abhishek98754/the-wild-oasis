import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://tcpfkvjbzqjtttexaney.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjcGZrdmpienFqdHR0ZXhhbmV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzEyNDE2MTgsImV4cCI6MjA0NjgxNzYxOH0.2_2FxNkLeTIVeOMdY_g9SA5su-YbnGMRKVjIkQXjltY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
