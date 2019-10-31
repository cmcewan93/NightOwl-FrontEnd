import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    // Pass on our props
    <Menu {...props} right>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/profile">
        My Profile
      </a>

      <a className="menu-item" href="/">
        Logout
      </a>
    </Menu>
  );
};
