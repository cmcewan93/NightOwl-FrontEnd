import React from "react";
import Axios from "axios";

import MapContainer from "./Map";
import HeaderContainer from "./HeaderContainer";
import FilterContainer from "./FilterContainer";

class MapView extends React.Component {
  state = {
    markers: []
  };
  async componentDidMount() {
    const { data } = await Axios.get(`/api/venues`);
    this.setState({ markers: data });
  }

  updateMarkers = () => {
    this.setState({ markers: [] });
  };

  render() {
    console.log(this.state.markers);
    return (
      <>
        <HeaderContainer />
        <MapContainer markers={this.state.markers} />
        <FilterContainer updateMarkers={this.updateMarkers} />
      </>
    );
  }
}

export default MapView;
