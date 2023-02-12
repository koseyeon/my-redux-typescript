import { connect } from "react-redux";
import Counter from "../components/Counter";
import { CounterState, decrease, increase } from "../modules/counter";

interface CounterContainerProps {
  count: number;
  increase: typeof increase;
  decrease: typeof decrease;
}
function CounterContainer({ count, increase, decrease }: CounterContainerProps) {
  return <Counter count={count} onIncrease={increase} onDecrease={decrease} />;
}

const mapStateToProps = (state: { counter: CounterState }) => ({
  count: state.counter.count,
});
// TODO: dispatch any 제거하기
// const mapDispatchToProps = (dispatch: any) => ({
//   onIncrease: () => {
//     dispatch(increase());
//   },
//   onDecrease: () => {
//     dispatch(decrease());
//   },
// });
export default connect(mapStateToProps, { increase, decrease })(CounterContainer);
