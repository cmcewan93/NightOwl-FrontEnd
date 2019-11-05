import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";


const fontColor = {
  color: "#b8b7ad"
};

export default function BarFooterButton(props) {
  return (
    <div>
      <Link style={fontColor} to={`${props.path}`}>
        {props.icon}
        {props.name}
      </Link>
    </div>
  );
}
