import React, { Component } from "react";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";

class CameraComponent extends Component {
  onTakePhoto(dataUri) {}

  render() {
    return (
      <div className="App">
        <Camera
          onTakePhoto={dataUri => {
            this.onTakePhoto(dataUri);
          }}
        />
      </div>
    );
  }
}

export default CameraComponent;
