import React from "react";
import FilterListItem from "./FilterListItem";

const formStyle = {
  backgroundColor: "grey",
  height: "100%",
  width: "100%"
};

class FilterContainer extends React.Component {
  render() {
    return (
      <form style={formStyle}>
        <FilterListItem />
      </form>
    );
  }
}

export default FilterContainer;
