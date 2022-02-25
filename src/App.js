import "./App.scss";
import React, { useState } from "react";
import CounterPage from "./pages/counterPage";
import PlaceholderPage from "./pages/placeholderPage";
import { useSelector } from "react-redux";

function App() {
    const page = useSelector((state) => state.page.value);

    return (
        <div className="App">
            {page === "counter-page" ? <CounterPage /> : null}
            {page === "placeholder-page" ? <PlaceholderPage /> : null}
        </div>
    );
}

export default App;
