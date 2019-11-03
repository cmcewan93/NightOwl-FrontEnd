import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    // Pass on our props
    <Menu {...props} right>
      <a className="menu-item" href="/map">
        Home
      </a>

      <a className="menu-item" href="/bar">
        Bar test
      </a>

      <a
        className="menu-item"
        href="/"
        onClick={() => localStorage.setItem("authenticated", false)}
      >
        Logout
      </a>
    </Menu>
  );
};
