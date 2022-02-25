import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    increment,
    decrement,
    reset,
    incrementByValue,
} from "../features/counter/counterSlice";
import { changePage } from "../features/page/pageSlice";

const CounterPage = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(changePage("placeholder-page"))}>
                Go to placeholder Page
            </button>
            <p>Count is: {count}</p>
            <button onClick={() => dispatch(increment())}>
                Increment Count
            </button>
            <button onClick={() => dispatch(decrement())}>
                Decrement Count
            </button>
            <button onClick={() => dispatch(incrementByValue(5))}>
                Increment Count by Value 5
            </button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    );
};

export default CounterPage;
