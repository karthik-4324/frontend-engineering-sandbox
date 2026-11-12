import { increment, decrement } from "../../slices/counterSlice";
import { useDispatch, useSelector } from "react-redux";

export const Counter = () => {
  const dispatch = useDispatch();

  const { count } = useSelector((state) => state.counter);
  const onUpClick = () => {
    dispatch(increment());
  };

  const onDownClick = () => {
    dispatch(decrement());
  }

  return (
    <>
      <h1>React Redux</h1>
      <button onClick={onUpClick}>up</button>
      <span>{count}</span>
      <button onClick = {onDownClick}>down</button>
    </>
  );
};
