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
      <div style={{ backgroundColor: "#373a47", padding: "0 0 400px 0" }}>
        <MuiThemeProvider>
          <React.Fragment>
            <AppBar title="Your Choices" primary={false} />
            <div style={{ marginLeft: "60px" }}>
              <TextField
                placeholder="Music Type"
                inputStyle={{ color: "#b8b7ad" }}
                onChange={handleChange("musicType")}
                defaultValue={values.musicType}
              />

              <br />
              <TextField
                placeholder="Price"
                inputStyle={{ color: "#b8b7ad" }}
                onChange={handleChange("price")}
                defaultValue={values.price}
              />
              <br />
              <TextField
                placeholder="Dress Code"
                inputStyle={{ color: "#b8b7ad" }}
                onChange={handleChange("dressCode")}
                defaultValue={values.dressCode}
              />
              <br />
              <TextField
                placeholder="Line Size"
                inputStyle={{ color: "#b8b7ad" }}
                onChange={handleChange("lineSize")}
                defaultValue={values.lineSize}
              />
              <br />

              <br />
              <RaisedButton
                label="Continue"
                primary={true}
                style={styles.button}
                onClick={this.continue}
              />
            </div>
          </React.Fragment>
        </MuiThemeProvider>
      </div>
    );
  }
}

const styles = {
  button: {
    margin: "15"
  }
};

export default FormUserDetails;
