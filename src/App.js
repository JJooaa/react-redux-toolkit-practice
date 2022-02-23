import "./App.scss";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    increment,
    decrement,
    incrementByValue,
} from "./features/counter/counterSlice";

function App() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className="App">
            <p>Count is: {count}</p>
            <button onClick={() => dispatch(increment())}>
                Increment Count
            </button>
            <button onClick={() => dispatch(decrement())}>
                Decrement Count
            </button>
            <button>Increment Count by Value</button>
        </div>
    );
}

export default App;
