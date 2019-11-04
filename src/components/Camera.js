import React from "react";
import CameraPhoto, { FACING_MODES } from "jslib-html5-camera-photo";

class Camera extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.cameraPhoto = null;
    this.videoRef = React.createRef();
    this.state = {
      dataUri: ""
    };
  }

  componentDidMount() {
    // We need to instantiate CameraPhoto inside componentDidMount because we
    // need the refs.video to get the videoElement so the component has to be
    // mounted.
    this.cameraPhoto = new CameraPhoto(this.videoRef.current);
  }

  startCamera(idealFacingMode, idealResolution) {
    this.cameraPhoto
      .startCamera(idealFacingMode, idealResolution)
      .then(() => {
        console.log("camera is started !");
      })
      .catch(error => {
        console.error("Camera not started!", error);
      });
  }

  startCameraMaxResolution(idealFacingMode) {
    this.cameraPhoto
      .startCameraMaxResolution(idealFacingMode)
      .then(() => {
        console.log("camera is started !");
      })
      .catch(error => {
        console.error("Camera not started!", error);
      });
  }

  takePhoto() {
    const config = {
      sizeFactor: 1
    };

    let dataUri = this.cameraPhoto.getDataUri(config);
    this.setState({ dataUri });
  }

  stopCamera() {
    this.cameraPhoto
      .stopCamera()
      .then(() => {
        console.log("Camera stoped!");
      })
      .catch(error => {
        console.log("No camera to stop!:", error);
      });
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            let facingMode = FACING_MODES.ENVIRONMENT;
            let idealResolution = { width: 640, height: 480 };
            this.startCamera(facingMode, idealResolution);
          }}
        >
          {" "}
          Start environment facingMode resolution ideal 640 by 480{" "}
        </button>

        <button
          onClick={() => {
            let facingMode = FACING_MODES.USER;
            this.startCamera(facingMode, {});
          }}
        >
          {" "}
          Start user facingMode resolution default{" "}
        </button>

        <button
          onClick={() => {
            let facingMode = FACING_MODES.USER;
            this.startCameraMaxResolution(facingMode);
          }}
        >
          {" "}
          Start user facingMode resolution maximum{" "}
        </button>

        <button
          onClick={() => {
            this.takePhoto();
          }}
        >
          {" "}
          Take photo{" "}
        </button>

        <button
          onClick={() => {
            this.stopCamera();
          }}
        >
          {" "}
          Stop{" "}
        </button>

        <video ref={this.videoRef} autoPlay="true" />
        <img alt="imgCamera" src={this.state.dataUri} />
      </div>
    );
  }
}

export default Camera;
