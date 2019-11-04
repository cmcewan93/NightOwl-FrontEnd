import React from "react";
import { ReactComponent as Arrow } from "../images/arrow.svg";

const resize = {
  position: "fixed",
  top: "1px",
  height: "40px",
  width: "25px"
};

export default function BackButton() {
  return <Arrow style={resize} />;
}
