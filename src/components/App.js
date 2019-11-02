import React from "react";
import Login from "./Login";
import MapView from "./MapView";

// import Burger from "./Burger";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import useApplicationData from "../hooks/useApplicationData";
import "./App.css";
import { SET_USER_AUTH } from "../reducers/application";
import BarviewList from "./BarviewList";

export default function App() {
  const { state, dispatch } = useApplicationData();
  console.log("application state", state);

  const setAuth = isAuthenticated => {
    dispatch({
      type: SET_USER_AUTH,
      auth: isAuthenticated
    });
    //console.log("dfgdfsgsd");
  };
  console.log("user authed?", state.userAuth);
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
          {!state.userAuth ? (
            <Redirect to="/" />
          ) : (
            <MapView setAuth={setAuth} />
          )}
        </Route>
        <Route exact path="/bar">
          <BarviewList />
        </Route>
      </Switch>
    </Router>
  );
}
