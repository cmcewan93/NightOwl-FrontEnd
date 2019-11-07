import React, { Component } from "react";
// import AppBar from "material-ui/AppBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Slider,
  Typography
} from "@material-ui/core";

import { ReactComponent as Owl } from "../../images/owl.svg";

const buttonPosition = {
  position: "fixed",
  bottom: "180px",
  left: "75px"
};

const backButtonPosition = {
  position: "fixed",
  bottom: "180px",
  right: "75px"
};

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  marks = [
    {
      value: 0,
      label: "0m"
    },

    {
      value: 10,
      label: "10m"
    },
    {
      value: 20,
      label: "20m"
    },
    {
      value: 30,
      label: "30m"
    },
    {
      value: 40,
      label: "40m"
    },
    {
      value: 50,
      label: "50m"
    },
    {
      value: 60,
      label: "60m"
    }
  ];

  render() {
    const { values, handleChange } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <div style={{ marginLeft: "60px" }}>
            <div style={{ marginTop: "50px" }}>
              <FormLabel component="legend">What is the dress code?</FormLabel>
            </div>
            <RadioGroup
              defaultValue="none"
              aria-label="musicType"
              name="customized-radios"
              onChange={(a, b) => handleChange("dressCode", b)}
            >
              <FormControlLabel
                value="blackTie"
                control={<Radio />}
                label="Black Tie"
              />

              <FormControlLabel
                value="casual"
                control={<Radio />}
                label="Casual"
              />
              <FormControlLabel
                value="formal"
                control={<Radio />}
                label="Formal"
              />
              <FormControlLabel
                value="semiFormal"
                control={<Radio />}
                label="Semi Formal"
              />
              <FormControlLabel value="none" control={<Radio />} label="None" />
            </RadioGroup>
            <div style={{ marginTop: "30px" }}>
              <Typography gutterBottom>
                How many minutes did you wait in line?
              </Typography>
            </div>

            <div style={{ marginRight: "50px" }}>
              <Slider
                defaultValue={20}
                step={1}
                max={60}
                valueLabelDisplay="auto"
                marks={this.marks}
                aria-labelledby="lineSize"
                onChange={(a, b) => handleChange("lineSize", b)}
              />
            </div>
            <RaisedButton
              label="Continue"
              primary={true}
              style={(styles.button, styles.rightarea, buttonPosition)}
              onClick={this.continue}
            />
            <RaisedButton
              label="Back"
              primary={false}
              style={(styles.button, backButtonPosition)}
              onClick={this.back}
            />
          </div>
          <Owl />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    padding: "15",
    marginTop: "50px"
  },
  rightarea: {
    marginRight: "50px"
  }
};

export default FormPersonalDetails;
