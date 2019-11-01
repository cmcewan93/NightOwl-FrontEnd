import React from "react";

import FilterItemList from "./FilterItemList";



class FilterContainer extends React.Component {
  render() {
    return (
      <>
        <FilterItemList changeMarkers={ this.props.changeMarkers} />
        
      </>
    );
  }
}

export default FilterContainer;
