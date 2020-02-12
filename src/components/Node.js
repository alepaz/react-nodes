import React, { useState } from "react";

export default function Node(props) {
  const [value, setValue] = useState({});
  const [positionX, setPositionX] = useState(500);
  const [positionY, setPositionY] = useState(500);

  document.addEventListener("click", printMousePos, true);
  function printMousePos(e) {
    const cursorX = e.pageX;
    const cursorY = e.pageY;
    setPositionX(cursorX);
    setPositionY(cursorY);
  }
  return (
    
    <div
      style={{
        border: 2,
        width: 300,
        borderStyle: "solid",
        position: "absolute",
        left: positionX,
        top: positionY
      }}
    >
      <label>
        input:
        <input type="text" name="input" />
      </label>
    </div>
  );
}
