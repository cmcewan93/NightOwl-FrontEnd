import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    // Pass on our props
    <Menu {...props} right>
      <Link to={"/"}>Logout</Link>
      <Link to={"/map"}>Home</Link>
      <Link to={"/bar"}>Test Bar View</Link>
    </Menu>
  );
};
