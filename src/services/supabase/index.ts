import "react-native-url-polyfill/auto";
import {createClient} from "@supabase/supabase-js";
const supabaseUrl =
  process.env.SUPABASE_ENDPOINT_URL ||
  "https://vmcobqkqiotfmiibegxe.supabase.co";
const supabaseAnonKey =
  process.env.SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZtY29icWtxaW90Zm1paWJlZ3hlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMxOTEwMzIsImV4cCI6MjAwODc2NzAzMn0.MUOvKC2UMFdMes2zU6YuGRY-Z5Z28Gvp28Hp-5WosfU";
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {autoRefreshToken: true},
});
