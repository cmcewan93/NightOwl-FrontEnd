import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";

import { ReactComponent as Owl } from "../../images/owl.svg";

export class Success extends Component {
  continue = e => {
    e.preventDefault();
    // Process from to API (with method)
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <MuiThemeProvider>
        <>
          <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h3>Thank you for your input!</h3>
            <p>All feedback is highly appreciated.</p>
          </div>
          <Owl />
        </>
      </MuiThemeProvider>
    );
  }
}

export default Success;
