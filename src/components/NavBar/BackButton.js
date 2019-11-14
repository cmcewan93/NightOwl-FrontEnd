import React from "react";
import { ReactComponent as Arrow } from "../../images/arrow.svg";
import { Link } from "react-router-dom";

const resize = {
  position: "fixed",
  top: "1px",
  height: "40px",
  width: "25px",
  left: "3px"
};

export default function BackButton() {
  return (
    <Link to={"/map"}>
      <Arrow style={resize} />
    </Link>
  );
}
