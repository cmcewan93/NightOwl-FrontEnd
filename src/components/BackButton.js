import React from "react";
import { ReactComponent as Arrow } from "../images/arrow.svg";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

const resize = {
  position: "fixed",
  top: "1px",
  height: "40px",
  width: "25px"
};

export default function BackButton() {
  return (
    <Link to={"/map"}>
      <Arrow style={resize} />
    </Link>
  );
}
