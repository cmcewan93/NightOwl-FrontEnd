import React from "react";
import Geocode from "react-geocode";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import Axios from "axios";

Geocode.setApiKey("AIzaSyDy3ctMoaRPaVPl936ZBk_1eC0TNiAwzX4");

const mapStyle = {
  height: "60%",
  margin: "5% 0% 0% 0%"
};

export class MapContainer extends React.Component {
  async componentDidMount() {
    const { data } = await Axios.get(`/api/venues`);
    this.setState({ markers: data });
  }

  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    defaultLat: 43.644175,
    defaultLng: -79.402204,
    errorMessage: "",
    markers: []
  };

  // componentDidMount() {
  // Asks the user to allow sharing location, once shared, this will setState
  // window.navigator.geolocation.getCurrentPosition(
  //   position =>
  //     this.setState({
  //       lat: position.coords.latitude,
  //       lng: position.coords.longitude
  //     }),
  //   err => this.setState({ errorMessage: err.message })
  // );

  // Geocoding to get latitude and longitude from address
  //   Geocode.fromAddress("Lighthouse Labs, Toronto, ON").then(
  //     response => {
  //       const { lat, lng } = response.results[0].geometry.location;
  //       this.setState({
  //         lat: lat,
  //         lng: lng
  //       });
  //     },
  //     error => {
  //       console.error(error);
  //     }
  //   );
  // }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  // Renders all of the markers
  renderMarkers() {
    return this.state.markers.map(marker => {
      return (
        <Marker
          key={marker.id}
          onClick={this.onMarkerClick}
          position={{ lat: marker.latitude, lng: marker.longitude }}
          name={marker.name}
          icon={{
            url: "/pint.svg",
            scaledSize: new window.google.maps.Size(30, 30)
          }}
        />
      );
    });
  }

  render() {
    return (
      <Map
        google={this.props.google}
        onClick={this.onMapClicked}
        initialCenter={{
          lat: this.state.defaultLat,
          lng: this.state.defaultLng
        }}
        zoom={14}
        disableDefaultUI={true}
        style={mapStyle}
      >
        <Marker
          onClick={this.onMarkerClick}
          name={"Current Location"}
          position={{
            lat: this.state.defaultLat,
            lng: this.state.defaultLng
          }}
          icon={{
            url: "/owl.svg",
            scaledSize: new window.google.maps.Size(25, 25)
          }}
        />
        {/* Rendering all the Markers */}
        {this.renderMarkers()}

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDy3ctMoaRPaVPl936ZBk_1eC0TNiAwzX4"
})(MapContainer);
