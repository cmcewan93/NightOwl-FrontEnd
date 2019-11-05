import React, { Component } from "react";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import Axios from "axios";

class CameraComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataUri: ""
    };
  }

  onTakePhoto(dataUri) {
    // Do stuff with the dataUri photo...
    this.setState({
      dataUri
    });
  }

  submitPhoto = () => {
    Axios.post("/api/reviews/upload", {
      body: JSON.stringify(this.state.dataUri),
      headers: {
        "Content-Type": "image/jpg"
      }
    });
  };

  render() {
    return (
      <div style={{ margin: 10, padding: 10 }}>
        {this.state.dataUri ? (
          <div>
            <img alt="" src={this.state.dataUri} />
            <button onClick={() => this.submitPhoto()}>submit</button>
          </div>
        ) : (
          <Camera
            onTakePhoto={dataUri => {
              this.onTakePhoto(dataUri);
            }}
          />
        )}
      </div>
    );
  }
}

export default CameraComponent;
