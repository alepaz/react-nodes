import React, { useState } from "react";

export default function Node(props) {
  const [value, setValue] = useState({});
  const { value } = props;
  
  return <div> {props.type} </div>;
}
