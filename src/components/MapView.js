import React from "react";
import MapContainer from "./Map";
import SearchBar from "./SearchBar";
import FilterContainer from "./FilterContainer";

import "./MapView.css";

class MapView extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <SearchBar className="header" />
        <div className="body">
          <MapContainer />
        </div>
        <div className="footer">
          <FilterContainer />
        </div>
      </div>
    );
  }
}

export default MapView;
