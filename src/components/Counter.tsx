interface CounterProps {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export default function Counter({ count, onIncrease, onDecrease }: CounterProps) {
  return (
    <>
      <h1>{count}</h1>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </>
  );
}
