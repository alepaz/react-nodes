import React from "react";
import "./App.css";
import Node from "./components/Node";
import Canvas from "./components/Canvas";

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
    <Canvas
      className="App"
      onClick={handlerPosition}
    >
      <Node type="input" />
    </Canvas>
  );
}

export default App;
