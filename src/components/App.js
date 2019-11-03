import React from "react";
import Login from "./Login";
import MapView from "./MapView";
import BarviewList from "./BarviewList";
// import Burger from "./Burger";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import useApplicationData from "../hooks/useApplicationData";
import Cookies from "js-cookie";
import "./App.css";
import { SET_USER_AUTH } from "../reducers/application";
import { isModuleSpecifier } from "@babel/types";

export default function App() {
  const { state, dispatch } = useApplicationData();
  console.log("application state", state);
  let auth = localStorage.getItem("authenticated");
  //console.log(auth);
  console.log(state.userAuth);
  const setAuth = isAuthenticated => {
    dispatch({
      type: SET_USER_AUTH,
      auth: isAuthenticated
    });
  };

  /**
   * TODO: pass down redirect component as nested so you can redirect from burger and infobox in mapview
   */
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {state.userAuth ? (
            <Redirect to="/map" />
          ) : (
            <Login setAuth={setAuth} />
          )}
        </Route>
        <Route exact path="/map">
          {!auth ? <Redirect to="/" /> : <MapView setAuth={setAuth} />}
        </Route>
        <Route exact path="/bar">
          {!auth ? <Redirect to="/" /> : <BarviewList setAuth={setAuth} />}
        </Route>
      </Switch>
    </Router>
  );
}
