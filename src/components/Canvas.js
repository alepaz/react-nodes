import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Canvas({ children }) {
  const [operation] = useState(() => (a, b) => a + b);

  return (
    <div style={{ height: 1000, width: "100%" }}>
      {children} Operation sum result: {operation(1, 4)}
    </div>
  );
}

Canvas.propTypes = {
  children: PropTypes.object
};
