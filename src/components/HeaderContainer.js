import React from "react";
import SearchBar from "./SearchBar";
import "./burger.css";
import Burger from "./Burger";

class HeaderContainer extends React.Component {
  render() {
    return (
      <>
        <SearchBar />
        <div id="Burger_Wrap">
          <Burger pageWrapId={"page-wrap"} outerContainerId={"App"} />
        </div>
      </>
    );
  }
}
export default HeaderContainer;
