import React from "react";
import Login from "./Login";
import MapView from "./MapView";
// import Burger from "./Burger";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <Login />
      </>
    );
  }
}

export default App;
