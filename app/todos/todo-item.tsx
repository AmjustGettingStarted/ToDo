"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { toggleTodo, deleteTodo } from "@/actions/todos";
import { useRouter } from "next/navigation";

export default function TodoItem({ todo }: any) {
  const router = useRouter();

  async function toggle() {
    await toggleTodo(todo.id, todo.completed);
    router.refresh();
  }

  async function remove() {
    await deleteTodo(todo.id);
    router.refresh();
  }

  return (
    <div className="flex items-center justify-between border rounded-lg p-3">
      <div className="flex items-center gap-3">
        <Checkbox checked={todo.completed} onCheckedChange={toggle} />
        <span className={todo.completed ? "line-through opacity-50" : ""}>
          {todo.title}
        </span>
      </div>

      <Button size="sm" variant="destructive" onClick={remove}>
        Delete
      </Button>
    </div>
  );
}
