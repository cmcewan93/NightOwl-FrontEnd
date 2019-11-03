import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Your Choices" />
          <TextField
            hintText="Music Type"
            floatingLabelText="Choose the Music Type of the bar"
            onChange={handleChange("musicType")}
            defaultValue={values.musicType}
          />
          <br />
          <TextField
            hintText="Price"
            floatingLabelText="Choose the Price Range of the bar"
            onChange={handleChange("price")}
            defaultValue={values.price}
          />
          <br />

          <TextField
            hintText="Dress Code"
            floatingLabelText="Choose the Dress Code of the bar"
            onChange={handleChange("dressCode")}
            defaultValue={values.dressCode}
          />
          <br />

          <TextField
            hintText="Dress Code"
            floatingLabelText="Choose the Dress Code of the bar"
            onChange={handleChange("dressCode")}
            defaultValue={values.dressCode}
          />
          <br />

          <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: "15"
  }
};

export default FormUserDetails;
