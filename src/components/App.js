import React from "react";
import Login from "./Login";
import MapView from "./MapView";
import UserForm from "./UserForm";
import BarviewList from "./BarviewList";
// import Burger from "./Burger";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import useApplicationData from "../hooks/useApplicationData";
import Cookies from "js-cookie";
import "./App.css";
import { SET_USER_AUTH } from "../reducers/application";
import { isModuleSpecifier } from "@babel/types";

export default function App() {
  const { state, dispatch } = useApplicationData();
  let auth = localStorage.getItem("authenticated");

  const setAuth = isAuthenticated => {
    dispatch({
      type: SET_USER_AUTH,
      auth: isAuthenticated
    });
  };
  let barId = 1;
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
          {!auth ? (
            <Redirect to="/" />
          ) : (
            <MapView setAuth={setAuth} barId={barId} />
          )}
        </Route>
        <Route exact path={`/bar/:id`}>
          {!auth ? <Redirect to="/" /> : <BarviewList setAuth={setAuth} />}
        </Route>
        <Route exact path={`/bar/checkin/:id`}>
          <UserForm />
        </Route>
      </Switch>
    </Router>
  );
}
