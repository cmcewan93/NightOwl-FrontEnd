import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

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
          <AppBar title="Success" />
          <h3>Thank you for your patience!</h3>
          <p>You will have a 10% discount in this bar.</p>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Success;
