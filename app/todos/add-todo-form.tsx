"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { createTodo } from "@/actions/todos";
import { useRouter } from "next/navigation";

export default function AddTodoForm() {
  const [title, setTitle] = useState("");
  const router = useRouter();

  async function onSubmit(e: any) {
    e.preventDefault();
    if (!title.trim()) return;

    await createTodo(title);
    setTitle("");
    router.refresh();
  }

  return (
    <form onSubmit={onSubmit} className="flex gap-2">
      <Input
        placeholder="Add todo..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button type="submit">Add</Button>
    </form>
  );
}
