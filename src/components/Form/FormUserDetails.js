import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { makeStyles } from "@material-ui/core/styles";
import {
  Radio,
  TextField,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Slider,
  Typography
} from "@material-ui/core";
import RaisedButton from "material-ui/RaisedButton";
import { ReactComponent as Owl } from "../../images/owl.svg";
// import StyledRadio from "./StyledRadio";

const buttonPosition = {
  position: "fixed",
  bottom: "155px",
  left: "153px"
};

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  valuetext = value => {
    return `${value}°C`;
  };

  useStyles = makeStyles(theme => ({
    root: {
      width: 300
    },
    margin: {
      height: theme.spacing(3)
    }
  }));

  marks = [
    {
      value: 0,
      label: "0$"
    },
    {
      value: 5,
      label: "5$"
    },
    {
      value: 10,
      label: "10$"
    },
    {
      value: 15,
      label: "15$"
    },
    {
      value: 20,
      label: "20$"
    },
    {
      value: 25,
      label: "25$"
    },
    {
      value: 30,
      label: "30$"
    },
    {
      value: 35,
      label: "35$"
    },
    {
      value: 40,
      label: "40$"
    }
  ];

  render() {
    const { values, handleChange } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <div style={{ marginLeft: "50px" }}>
            <div style={{ marginTop: "50px" }}>
              <FormLabel component="legend" style={{ fontWeight: "bold" }}>
                Please select the Music Type!{" "}
              </FormLabel>
            </div>
            <RadioGroup
              defaultValue="none"
              aria-label="musicType"
              name="customized-radios"
              onChange={(a, b) => handleChange("musicType", b)}
            >
              <FormControlLabel value="Rock" control={<Radio />} label="Rock" />
              <FormControlLabel value="Rap" control={<Radio />} label="Rap" />
              <FormControlLabel
                value="Top40"
                control={<Radio />}
                label="Top 40"
              />
              <FormControlLabel
                value="HipHop"
                control={<Radio />}
                label="Hip Hop/RnB"
              />
              <FormControlLabel
                value="Country"
                control={<Radio />}
                label="Country"
              />
              <FormControlLabel value="EDM" control={<Radio />} label="EDM" />
            </RadioGroup>
            <div style={{ marginTop: "30px" }}>
              <Typography gutterBottom>
                How much did you spend on cover?
              </Typography>
            </div>

            <div style={{ marginRight: "50px" }}>
              <Slider
                defaultValue={20}
                step={1}
                max={40}
                valueLabelDisplay="auto"
                marks={this.marks}
                aria-labelledby="price"
                onChange={(a, b) => handleChange("price", b)}
              />
            </div>
            <div style={{ marginTop: "50px" }}>
              <RaisedButton
                label="Continue"
                primary={true}
                style={(styles.button, styles.area, buttonPosition)}
                onClick={this.continue}
              />
            </div>
          </div>
          <Owl />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    padding: "15"
  },
  area: {
    marginLeft: "70px"
  }
};

export default FormUserDetails;
