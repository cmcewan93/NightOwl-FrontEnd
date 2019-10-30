import React from "react";
import Geocode from "react-geocode";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import Axios from "axios";

Geocode.setApiKey("AIzaSyDy3ctMoaRPaVPl936ZBk_1eC0TNiAwzX4");

const mapStyles = {
  width: "100%",
  height: "100%"
};

componentDidMount() {
  Axios.get('/api/venues').then(res => {
    this.setState({ bars.lat: res.data.l})
  })
}

export class MapContainer extends React.Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    lat: 43.644175,
    lng: -79.402204,
    errorMessage: "",
    // Added bars temporarily, will render this data in the future and set lat, long based on address using Geocode
    bars: [
      {
        address: "Petty Cash",
        lat: null,
        long: null
      }
    ]
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

  render() {
    return (
      <Map
        google={this.props.google}
        onClick={this.onMapClicked}
        style={mapStyles}
        initialCenter={{
          lat: this.state.lat,
          lng: this.state.lng
        }}
        zoom={14}
      >
        <Marker
          onClick={this.onMarkerClick}
          name={"Current Location"}
          position={{
            lat: this.state.lat,
            lng: this.state.lng
          }}
          icon={{
            url: "/owl.svg",
            scaledSize: new window.google.maps.Size(25, 25)
          }}
        />

        <Marker
          onClick={this.onMarkerClick}
          name={"Belfast Love"}
          position={{
            lat: 43.6448919,
            lng: -79.4006397
          }}
          icon={{
            url: "/pint.svg",
            scaledSize: new window.google.maps.Size(30, 30)
          }}
        />

        <Marker
          onClick={this.onMarkerClick}
          name={"Petty Cash"}
          position={{
            lat: 43.6455072,
            lng: -79.4029564
          }}
          icon={{
            url: "/pint.svg",
            scaledSize: new window.google.maps.Size(30, 30)
          }}
        />

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
