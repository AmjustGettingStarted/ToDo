import TodoItem from "./todo-item";

export default function TodoList({ todos }: any) {
  if (!todos?.length) {
    return <p className="text-muted-foreground">No todos yet.</p>;
  }

  return (
    <div className="space-y-2">
      {todos.map((todo: any) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
