import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import { ReactComponent as Owl } from "../images/owl.svg";
import { ReactComponent as Home } from "../images/house.svg";
import { ReactComponent as Logout } from "../images/logout.svg";

const owlAlignment = {
  position: "fixed",
  height: "90px",
  width: "90px",
  right: "7px",
  bottom: "15px"
};

const imageSize = {
  height: "40px",
  width: "40px"
};

export default props => {
  return (
    // Pass on our props
    <Menu {...props} right>
      <Link to={"/"}>
        <Logout style={imageSize} />
        Logout
      </Link>
      <Link to={"/map"}>
        <Home style={imageSize} />
        Home
      </Link>
      <Link to={"/bar"}>Test Bar View</Link>
      <Owl style={owlAlignment} />
    </Menu>
  );
};
