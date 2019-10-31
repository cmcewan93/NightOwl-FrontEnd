import React from "react";
// import MapContainer from "./Map";
// import Login from "./Login";
// import FilterContainer from "./FilterContainer";
// import SearchBar from "./SearchBar";
import BarviewList from "./BarviewList";
// import FilterListItem from "./FilterListItem";
import Login from "./Login";
import MapView from "./MapView";
// import Burger from "./Burger";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Burger from "./Burger";

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
