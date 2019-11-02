import React from "react";
import SearchBar from "./SearchBar";
import "./burger.css";
import Burger from "./Burger";

class HeaderContainer extends React.Component {
  render() {
    //console.log("AJNSJAN", this.props.name);
    let testProp = this.props.name;
    //console.log("Test Prop", testProp);
    return (
      <>
        <SearchBar name={testProp} />
        <div id="Burger_Wrap">
          <Burger
            pageWrapId={"page-wrap"}
            outerContainerId={"App"}
            setAuth={this.props.setAuth}
          />
        </div>
      </>
    );
  }
}
export default HeaderContainer;
