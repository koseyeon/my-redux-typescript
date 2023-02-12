import { AnyAction } from "redux";
import { todoType } from "../types/todos";

export interface TodosState {
  input: string;
  todos: todoType[];
}

enum ActionTypes {
  CHANGE_INPUT = "todos/CHANGE_INPUT",
  INSERT = "todos/INSERT",
  TOGGLE = "todos/TOGGLE",
  REMOVE = "todos/REMOVE",
}

interface changeInputAction {
  type: ActionTypes;
  payload: { input: string };
}
interface insertAction {
  type: ActionTypes;
  payload: { todo: todoType };
}
interface toggleAction {
  type: ActionTypes;
  payload: { id: number };
}
interface removeAction {
  type: ActionTypes;
  payload: { id: number };
}
type todosAction = changeInputAction | insertAction | toggleAction | removeAction | AnyAction;

let id = 0;
export const changeInput = (input: string): changeInputAction => ({ type: ActionTypes.CHANGE_INPUT, payload: { input } });
export const insert = (text: string): insertAction => ({
  type: ActionTypes.INSERT,
  payload: {
    todo: {
      id: id++,
      text,
      done: false,
    },
  },
});
export const toggle = (id: number): toggleAction => ({ type: ActionTypes.TOGGLE, payload: { id } });
export const remove = (id: number): removeAction => ({ type: ActionTypes.REMOVE, payload: { id } });

const initialState: TodosState = {
  input: "",
  todos: [],
};

export default function todos(state = initialState, action: todosAction): TodosState {
  switch (action.type) {
    case ActionTypes.CHANGE_INPUT:
      return {
        ...state,
        input: (action as changeInputAction).payload.input,
      };
    case ActionTypes.INSERT:
      return {
        ...state,
        todos: state.todos.concat((action as insertAction).payload.todo),
      };
    case ActionTypes.TOGGLE:
      return {
        ...state,
        todos: state.todos.map((todo) => (todo.id === (action as toggleAction).payload.id ? { ...todo, done: !todo.done } : todo)),
      };
    case ActionTypes.REMOVE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== (action as removeAction).payload.id),
      };
    default:
      return state;
  }
}
