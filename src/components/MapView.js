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
    const filteredIds = data.map(item => item.venue_id);
    const filterData = this.state.markers.filter(venue =>
      filteredIds.includes(venue.id)
    );

    this.setState({ markers: filterData });
  };

  _allMarkers = () => {
    Axios.get(`/api/venues`).then(response => {
      this.setState({ markers: response.data });
    });
  };

  render() {
    console.log(this.state.markers);
    return (
      <>
        <HeaderContainer />
        <Map markers={this.state.markers} />
        <FilterContainer
          updateMarkers={this.updateMarkers}
          allMarkers={this._allMarkers}
        />
      </>
    );
  }
}

export default MapView;
