import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { increment, decrement, incrementAsync, decrementAsync, reset } from "../redux/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="counter">
      <h2 onClick={() => dispatch(reset())}>{count}</h2>
      <div className='counter-buttons'>
        <div className="counter-by-one">
          <button onClick={() => dispatch(decrement())}>Decrement</button>
          <button onClick={() => dispatch(increment())}>Increment</button>
        </div>
        <div className="counter-by-ten">
          <button onClick={() => dispatch(decrementAsync(10))}>DecrementAsync by 10</button>
          <button onClick={() => dispatch(incrementAsync(10))}>IncrementAsync by 10</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
