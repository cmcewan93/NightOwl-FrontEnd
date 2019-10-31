import React from "react";

import FilterItemList from "./FilterItemList";
import "./burger.css";
import Burger from "./Burger";

const containerStyle = {
  position: "fixed",
  top: 0,
  right: 0
};

class FilterContainer extends React.Component {
  render() {
    return (
      <>
        <FilterItemList />
        <div id="App">
          <Burger
            pageWrapId={"page-wrap"}
            outerContainerId={"App"}
            style={containerStyle}
          />

          <div id="page-wrap"></div>
        </div>
      </>
    );
  }
}

export default FilterContainer;
