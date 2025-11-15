import { getTodos, createTodo } from "@/app/actions/todos";
import AddTodoForm from "./add-todo-form";
import TodoList from "./todo-list";

export default async function TodosPage() {
  const todos = await getTodos();

  return (
    <div className="max-w-md mx-auto mt-10 space-y-6">
      <h1 className="text-2xl font-bold">Todo Test</h1>
      <AddTodoForm />
      <TodoList todos={todos} />
    </div>
  );
}
