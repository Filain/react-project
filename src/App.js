import './App.css';
import {Posts} from "./components/Posts/Posts";
import React from "react";
import {Comments} from "./components/Comments/Comments";
import {Cars} from "./components/Cars/Cars";

function App() {
    return (
        <div className="App">
            <div><Posts/></div>
            <div><Comments/></div>
            <div><Cars/></div>
        </div>
    );
}

export default App;
