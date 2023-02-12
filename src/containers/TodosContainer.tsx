import { connect } from "react-redux";
import Todos from "../components/Todos";
import { changeInput, insert, remove, TodosState, toggle } from "../modules/todos";
import { todoType } from "../types/todos";

interface TodosContainerProps {
  input: string;
  todos: todoType[];
  changeInput: typeof changeInput;
  insert: typeof insert;
  toggle: typeof toggle;
  remove: typeof remove;
}

function TodosContainer({ input, todos, changeInput, insert, toggle, remove }: TodosContainerProps) {
  return <Todos input={input} todos={todos} onChangeInput={changeInput} onInsert={insert} onToggle={toggle} onRemove={remove}></Todos>;
}

export default connect((state: { todos: TodosState }) => ({ todos: state.todos.todos, input: state.todos.input }), { changeInput, insert, toggle, remove })(TodosContainer);
