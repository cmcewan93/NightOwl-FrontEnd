import React from "react";

import FilterItemList from "./FilterItemList";

class FilterContainer extends React.Component {
  render() {
    return (
      <>
        <FilterItemList updateMarkers={this.props.updateMarkers} />
      </>
    );
  }
}

export default FilterContainer;
