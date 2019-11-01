import React from "react";
import MapContainer from "./Map";
import HeaderContainer from "./HeaderContainer";
import FilterContainer from "./FilterContainer";
import Axios from "axios";

class MapView extends React.Component {
  state = { markers: [] };

  async componentDidMount() {
    const { data } = await Axios.get(`/api/venues`);
    this.setState({ markers: data });
  }

  _changeMarkers = () => {
    Axios.get(`/api/filters/trending`).then(response => {
      this.setState({ markers: response.data });
    });
  };

  _allMarkers = () => {
    Axios.get(`/api/venues`).then(response => {
      this.setState({ markers: response.data });
    });
  };

  render() {
    console.log("Hello", this.state.markers);
    return (
      <>
        <HeaderContainer />
        <MapContainer markers={this.state.markers} />
        <FilterContainer
          changeMarkers={this._changeMarkers}
          allMarkers={this._allMarkers}
        />
      </>
    );
  }
}

export default MapView;
