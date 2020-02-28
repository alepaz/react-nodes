import React, { Component } from "react";

class Canvas extends Component {
  state = {
    result: {}
  };
  render() {
    return (
      <div style={{ height: 800, width: "100%" }}>{this.props.children}</div>
    );
  }
}

export default Canvas;
