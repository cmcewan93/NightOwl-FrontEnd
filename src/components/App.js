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
//import PrivateRoute from "./PrivateRoute";
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
  //console.log("@#$@#$", state);
  return (
    <Router>
      <Switch>
        {state.userAuth && (
          <Route path="/MapView">
            <MapView />
          </Route>
        )}
        <Route path="/">
          <Login setAuth={setAuth} />
        </Route>
      </Switch>
    </Router>
  );
}
