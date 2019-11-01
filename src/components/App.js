import React from "react";
import Login from "./Login";
import MapView from "./MapView";
// import Burger from "./Burger";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import useApplicationData from "../hooks/useApplicationData";
import "./App.css";
import Burger from "./Burger";

export default function App(props) {
  const { state } = useApplicationData();
  console.log(state);

  return (
    <>
      <Login />
    </>
  );
}
