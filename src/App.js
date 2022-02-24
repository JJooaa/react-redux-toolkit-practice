import "./App.scss";
import React, { useState } from "react";
import CounterPage from "./counterPage";
import PlaceholderPage from "./placeholderPage";
function App() {
    const [page, setPage] = useState("pc");
    return (
        <div className="App">
            {page === "counter" ? <CounterPage /> : null}
            {page === "pc" ? <PlaceholderPage /> : null}
        </div>
    );
}

export default App;
