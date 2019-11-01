import React from "react";
import Axios from "axios";

import Map from "./Map";
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

  updateMarkers = async type => {
    const { data } = await Axios.get(`/api/${type}`);

    this.setState({ markers: data });
  };

  render() {
    console.log(this.state.markers);
    return (
      <>
        <HeaderContainer />
        <Map markers={this.state.markers} />
        <FilterContainer updateMarkers={this.updateMarkers} />
      </>
    );
  }
}

export default MapView;
