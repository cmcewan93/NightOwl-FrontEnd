import React from "react";
import Geocode from "react-geocode";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

Geocode.setApiKey("AIzaSyDy3ctMoaRPaVPl936ZBk_1eC0TNiAwzX4");

const mapStyle = {
  height: "75%"
};

export class MapContainer extends React.Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    defaultLat: 43.644175,
    defaultLng: -79.402204
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

  onFilterClicked = props => {
    if (this.props.markers) {
      console.log("TEST");
      this.setState({
        markers: this.props.markers
      });
    }
  };

  // Renders all of the markers
  renderMarkers() {
    return this.props.markers.map(marker => {
      return (
        <Marker
          key={marker.id}
          onClick={this.onMarkerClick}
          position={{
            lat: marker.latitude,
            lng: marker.longitude
          }}
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
    console.log("I AM FROM MAPVIEW", this.props.markers);
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
        gestureHandling={"greedy"}
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
            <h2>{this.state.selectedPlace.name}</h2>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDy3ctMoaRPaVPl936ZBk_1eC0TNiAwzX4"
})(MapContainer);
