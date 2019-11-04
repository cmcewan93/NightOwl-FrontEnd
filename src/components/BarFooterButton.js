import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

export default function BarFooterButton(props) {
  //console.log(props);
  //console.log('This is the path', props.path);
  return (
    <div>
      <Link to={`${props.path}`}>{props.name}</Link>
    </div>
  );
}
