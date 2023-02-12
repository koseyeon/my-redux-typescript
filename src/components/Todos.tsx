import { todoType } from "../types/todos";
import TodoItem from "./TodoItem";
import { changeInput, insert, toggle, remove } from "../modules/todos";
import { useState } from "react";
interface TodosProps {
  input: string;
  todos: todoType[];
  onChangeInput: typeof changeInput;
  onInsert: typeof insert;
  onToggle: typeof toggle;
  onRemove: typeof remove;
}
export default function Todos({ input, todos, onChangeInput, onInsert, onToggle, onRemove }: TodosProps) {
  return (
    <>
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          onInsert(input);
          onChangeInput("");
        }}
      >
        <input value={input} onChange={(e: React.FormEvent<HTMLInputElement>) => onChangeInput(e.currentTarget.value)} />
        <button type="submit">등록</button>
      </form>
      <div>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onRemove={onRemove} />
        ))}
      </div>
    </>
  );
}
