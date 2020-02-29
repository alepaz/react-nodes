import React from "react";
import PropTypes from "prop-types";

export default function Node(props) {
  return <div> {props.type} </div>;
}

Node.propTypes = {
  props: PropTypes.object,
  type: PropTypes.string
};
