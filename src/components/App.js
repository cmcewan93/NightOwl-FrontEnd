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
import { SET_USER_AUTH, SET_BAR_ID } from "../reducers/application";
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
  // let barId = 1;

  const setBarId = id => {
    // Set state barId to id
    console.log("set barId is working!");
    dispatch({
      type: SET_BAR_ID,
      auth: id
    });
  };
  console.log("venues", state.venues);
  const currentBar = (id, venues) => {
    return venues.find(venue => venue.id === id);
  };
  let currentBarObj = {};
  if (state.venues !== undefined) {
    currentBarObj = currentBar(state.barId, state.venues);
  }

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
            <MapView
              setAuth={setAuth}
              barId={state.barId}
              setBarId={setBarId}
            />
          )}
        </Route>
        <Route exact path={`/bar/:${state.barId}`}>
          {!auth ? (
            <Redirect to="/" />
          ) : (
            <BarviewList setAuth={setAuth} bar={currentBarObj} />
          )}
        </Route>
        <Route exact path={`/bar/checkin/:${state.barId}`}>
          <UserForm barId={state.barId} />
        </Route>
      </Switch>
    </Router>
  );
}
