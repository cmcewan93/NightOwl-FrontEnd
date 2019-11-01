import React from "react";
import MapContainer from "./Map";
import HeaderContainer from "./HeaderContainer";
import FilterContainer from "./FilterContainer";
import Axios from "axios";

class MapView extends React.Component {
  state = { markers: [] };
  async componentDidMount() {
    const { data } = Axios.get("/api/venues");
    this.setState({ markers: data });
    console.log(this.state.markers);
  }
  _changeMarkers = () => {
    console.log(this.state.markers);
  };

  render() {
    return (
      <>
        <HeaderContainer />
        <MapContainer />
        <FilterContainer changeMarkers={this._changeMarkers} />
      </>
    );
  }
}

export default MapView;
