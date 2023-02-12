import { remove, toggle } from "../modules/todos";
import { todoType } from "../types/todos";

interface TodoItemProps {
  todo: todoType;
  onToggle: typeof toggle;
  onRemove: typeof remove;
}
export default function TodoItem({ todo, onToggle, onRemove }: TodoItemProps) {
  return (
    <div>
      <input type="checkbox" onClick={() => onToggle(todo.id)} checked={todo.done} readOnly={true} />
      <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>{todo.text}</span>
      <button onClick={() => onRemove(todo.id)}>삭제</button>
    </div>
  );
}
