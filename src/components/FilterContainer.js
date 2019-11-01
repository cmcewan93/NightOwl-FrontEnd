import React from "react";

import FilterItemList from "./FilterItemList";

class FilterContainer extends React.Component {
  render() {
    return (
      <>
        <FilterItemList
          changeMarkers={this.props.changeMarkers}
          allMarkers={this.props.allMarkers}
        />
      </>
    );
  }
}

export default FilterContainer;
