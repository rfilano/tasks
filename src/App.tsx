import React from "react";
import "./App.css";
import { ShowHideOldElements } from "./components/ShowHideOldElements";
import { Quizzer } from "./quizzer/Quizzer";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header" style={{ backgroundColor: "gray" }}>
                UD CISC275 with React Hooks and TypeScript
            </header>
            <Quizzer></Quizzer>
            <ShowHideOldElements></ShowHideOldElements>
        </div>
    );
}

export default App;
