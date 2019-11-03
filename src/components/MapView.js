import React, { Component } from "react";
import Axios from "axios";

import Map from "./Map";
import HeaderContainer from "./HeaderContainer";
import FilterContainer from "./FilterContainer";

const mainContainer = {
  height: "100vh",
  width: "100vh"
};

const headerContainer = {
  height: "10vh",
  width: "100vh"
};

const mapStyle = {
  height: "70vh",
  width: "100vh"
};

const footerContainer = {
  height: "20vh",
  width: "100vh"
};

class MapView extends Component {
  state = {
    markers: [],
    filteredMarkers: []
  };
  async componentDidMount() {
    const { data } = await Axios.get(`/api/venues`);
    this.setState({ markers: data, filteredMarkers: data });
  }

  updateMarkers = async type => {
    const { data } = await Axios.get(`/api/filters/${type}`);
    const filteredIds = data.map(item => item.venue_id);
    const filterData = this.state.markers.filter(venue =>
      filteredIds.includes(venue.id)
    );
    this.setState({ filteredMarkers: filterData });
  };

  _allMarkers = () => {
    Axios.get(`/api/venues`).then(response => {
      this.setState({ filteredMarkers: response.data, markers: response.data });
    });
  };

  setSearch = name => {
    Axios.get(`/api/filters/search/${name}`).then(response => {
      this.setState({
        filteredMarkers: response.data
      });
    });
  };

  render() {
    return (
      <div style={mainContainer}>
        <HeaderContainer
          name={this.state.markers}
          search={this.setSearch}
          style={headerContainer}
          setAuth={this.state.setAuth}
        />
        <Map markers={this.state.filteredMarkers} style={mapStyle} />
        <FilterContainer
          updateMarkers={this.updateMarkers}
          allMarkers={this._allMarkers}
          style={footerContainer}
        />
      </div>
    );
  }
}

export default MapView;
