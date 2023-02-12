export interface CounterState {
  count: number;
}

enum ActionTypes {
  INCREASE = "counter/INCREASE",
  DECREASE = "counter/DECREASE",
}

interface IncreaseAction {
  type: ActionTypes.INCREASE;
}
interface DecreaseAction {
  type: ActionTypes.DECREASE;
}

type CounterAction = IncreaseAction | DecreaseAction;

export const increase = (): IncreaseAction => ({ type: ActionTypes.INCREASE });
export const decrease = (): DecreaseAction => ({ type: ActionTypes.DECREASE });

const initialState = {
  count: 0,
};

export default function counter(state = initialState, action: CounterAction): CounterState {
  switch (action.type) {
    case ActionTypes.INCREASE:
      return {
        count: state.count + 1,
      };
    case ActionTypes.DECREASE:
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
}
