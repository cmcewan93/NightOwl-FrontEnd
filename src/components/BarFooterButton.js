import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

export default function BarFooterButton(props) {
  return (
    <div>
      <Link to={`${props.path}`}>{props.name}</Link>
    </div>
  );
}
