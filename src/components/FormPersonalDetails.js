import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <MuiThemeProvider>
        <>
          <AppBar title="Continue Your Choices" />
          <TextField
            hintText="Age Range"
            floatingLabelText="Choose the Age Range of the bar"
            onChange={handleChange("ageRange")}
            defaultValue={values.ageRange}
          />
          <br />
          <TextField
            hintText="Line Size"
            floatingLabelText="Choose the waiting time of the bar"
            onChange={handleChange("lineSize")}
            defaultValue={values.lineSize}
          />
          <br />

          <TextField
            hintText="Women/Men Ratio"
            floatingLabelText="Guess the Women/Men Ratio "
            onChange={handleChange("womenMenRatio")}
            defaultValue={values.womenMenRatio}
          />
          <br />

          <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />

          <RaisedButton
            label="Back"
            primary={false}
            style={styles.button}
            onClick={this.back}
          />
        </>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: "15"
  }
};

export default FormPersonalDetails;
