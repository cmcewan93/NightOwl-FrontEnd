import React from "react";
import Geocode from "react-geocode";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import BarFooter from "./BarFooter";
import $ from "jquery";

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
    defaultLng: -79.402204,
    currentBar: null
  };

  onMarkerClick = (props, marker, e) => {
    //TODO Set state of current bar
    this.setState({
      selectedPlace: props,
      selectedId: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

    this.props.setBarId(props.id);
  };
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
    return this.props.markers.map((marker, index) => {
      // console.log('ID', marker.id);
      return (
        <Marker
          key={index}
          id={marker.id}
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
  displayBarFooter() {
    if (this.state.showingInfoWindow) {
      //console.log("ya im showing");
      $("#f-foot").css("display", "none");
      $("#b-foot").css("display", "block");
    } else {
      $("#b-foot").css("display", "none");
      $("#f-foot").css("display", "block");
      //console.log("im not showing");
    }
  }
  render() {
    // console.log("Map props", this.props.bar);
    // let barName = "";
    // if (this.props.bar !== undefined) {
    //   barName = this.props.bar.name;
    // }

    // const request = {
    //   query: `${barName}`,
    //   fields: ["photos", "formatted_address", "rating"]
    // };

    return (
      <Map
        google={this.props.google}
        onClick={this.onMapClicked}
        initialCenter={{
          lat: this.state.defaultLat,
          lng: this.state.defaultLng
        }}
        zoom={15}
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
            scaledSize: new window.google.maps.Size(30, 30)
          }}
        />
        {/* Rendering all the Markers */}
        {this.renderMarkers()}

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <h3>{this.state.selectedPlace.name}</h3>
          </div>
        </InfoWindow>
        <BarFooter barId={this.props.barId} bar={this.props.bar}></BarFooter>
        {this.displayBarFooter()}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDy3ctMoaRPaVPl936ZBk_1eC0TNiAwzX4"
})(MapContainer);
