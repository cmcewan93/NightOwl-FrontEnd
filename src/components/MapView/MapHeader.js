import React from "react";
import SearchBar from "../NavBar/SearchBar";
import "../../styles/burger.css";
import Burger from "../NavBar/Burger";

class MapHeader extends React.Component {
  render() {
    return (
      <>
        <SearchBar search={this.props.search} />
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
export default MapHeader;
