import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {
  Radio,
  TextField,
  RadioGroup,
  FormControlLabel,
  FormLabel
} from "@material-ui/core";
import RaisedButton from "material-ui/RaisedButton";
// import StyledRadio from "./StyledRadio";

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
          <div style={{ marginLeft: "60px" }}>
            {/* <TextField
              hintText="Music Type"
              floatingLabelText=""
              onChange={handleChange("musicType")}
              defaultValue={values.musicType}
            /> */}
            <FormLabel component="legend">
              Please select the Music Type!{" "}
            </FormLabel>
            <RadioGroup
              defaultValue="none"
              aria-label="Music Type"
              name="customized-radios"
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
                label="Hip Hop/Rnb"
              />
              <FormControlLabel
                value="Country"
                control={<Radio />}
                label="Country"
              />
              <FormControlLabel value="Edm" control={<Radio />} label="Edm" />
            </RadioGroup>

            <div style={{ marginTop: "50px" }}>
              <RaisedButton
                label="Continue"
                primary={true}
                style={(styles.button, styles.area)}
                onClick={this.continue}
              />
            </div>
          </div>
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
