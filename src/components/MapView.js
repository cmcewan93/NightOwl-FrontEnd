import React from "react";
import MapContainer from "./Map";
import HeaderContainer from "./HeaderContainer";
import FilterContainer from "./FilterContainer";

class MapView extends React.Component {
  render() {
    return (
      <>
        <HeaderContainer />
        <MapContainer />
        <FilterContainer />
      </>
    );
  }
}

export default MapView;
