import React from "react";

const fontStyle = {
  color: "black",
  fontWeight: "bold"
};

export default function Barname(props) {
  return <h3 style={fontStyle}>{props.currentBar.name}</h3>;
}
