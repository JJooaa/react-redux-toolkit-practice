import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    increment,
    decrement,
    incrementByValue,
} from "./features/counter/counterSlice";

const CounterPage = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    const [value, setValue] = useState(5);

    return (
        <div>
            <p>Count is: {count}</p>
            <button onClick={() => dispatch(increment())}>
                Increment Count
            </button>
            <button onClick={() => dispatch(decrement())}>
                Decrement Count
            </button>
            <button onClick={() => dispatch(incrementByValue(value))}>
                Increment Count by Value
            </button>
        </div>
    );
};

export default CounterPage;
