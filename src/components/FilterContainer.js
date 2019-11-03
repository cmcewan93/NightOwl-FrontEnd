import React from "react";

import FilterItemList from "./FilterItemList";



class FilterContainer extends React.Component {
  render() {
    return (
      <div id="f-foot">
        <FilterItemList
          updateMarkers={this.props.updateMarkers}
          allMarkers={this.props.allMarkers}
        />
      </div>
    );
  }
}

export default FilterContainer;
