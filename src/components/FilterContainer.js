import React from "react";

import FilterItemList from "./FilterItemList";
import "./burger.css";
import Burger from "./Burger";

// const containerStyle = {
//   width: "100%"
// };

class FilterContainer extends React.Component {
  render() {
    return (
      <>
        <FilterItemList />
        <div id="App">
          <Burger pageWrapId={"page-wrap"} outerContainerId={"App"} />

          <div id="page-wrap"></div>
        </div>
      </>
    );
  }
}

export default FilterContainer;
