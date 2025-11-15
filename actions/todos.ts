"use server";

import { supabaseServer } from "@/lib/supabase/server";
import { auth } from "@clerk/nextjs/server";

export async function getTodos() {
  const supabase = supabaseServer();
  const { userId } = auth();

  const { data, error } = await supabase
    .from("todos")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data;
}

export async function createTodo(title: string) {
  const supabase = supabaseServer();
  const { userId } = auth();

  const { error } = await supabase.from("todos").insert({
    title,
    user_id: userId,
    completed: false,
  });

  if (error) throw error;
}

export async function toggleTodo(id: string, curr: boolean) {
  const supabase = supabaseServer();

  const { error } = await supabase
    .from("todos")
    .update({ completed: !curr })
    .eq("id", id);

  if (error) throw error;
}

export async function deleteTodo(id: string) {
  const supabase = supabaseServer();

  const { error } = await supabase.from("todos").delete().eq("id", id);

  if (error) throw error;
}
