import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Node from "./components/Node";

function App() {
  const handlerPosition = function() {
    console.log(
      "scroll x",
      window.scrollX +
        document.querySelector(".App").getBoundingClientRect().left
    );
    console.log(
      "scroll y",
      window.scrollY +
        document.querySelector(".App").getBoundingClientRect().top
    );
  };
  return (
    <div
      className="App"
      style={{ height: 1000, width: "100%" }}
      onClick={handlerPosition}
    >
      <Node type="input" />
    </div>
  );
}

export default App;
