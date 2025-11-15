"use server";

import { supabaseServer } from "@/lib/supabase/server";

export async function testDb() {
  const supabase = supabaseServer();
  const { data, error } = await supabase.from("todos").select("*");
  return { data, error };
}
