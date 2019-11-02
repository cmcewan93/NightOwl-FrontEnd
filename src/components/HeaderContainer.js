import React from "react";
import SearchBar from "./SearchBar";
import "./burger.css";
import Burger from "./Burger";

class HeaderContainer extends React.Component {
  render() {
    // console.log("HELLO", this.props.search);
    return (
      <>
        <SearchBar search={this.props.search} />
        <div id="Burger_Wrap">
          <Burger pageWrapId={"page-wrap"} outerContainerId={"App"} />
        </div>
      </>
    );
  }
}
export default HeaderContainer;
