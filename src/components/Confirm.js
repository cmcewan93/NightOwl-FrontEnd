import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { List, ListItem, ListItemText } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";

export class Confirm extends Component {
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
    const {
      values: { musicType, price, dressCode, ageRange, lineSize, womenMenRatio }
    } = this.props;

    return (
      <MuiThemeProvider>
        <>
          <AppBar title="Confirm your choices" />

          <List>
            <ListItem
              placeholder="Music Type"
              inputStyle={{ color: "#b8b7ad" }}
              secondaryText={musicType}
            ></ListItem>
            <ListItem
              primaryText="Price Range"
              secondaryText={price}
            ></ListItem>
            <ListItem
              primaryText="Dress Code"
              secondaryText={dressCode}
            ></ListItem>
            <ListItem
              primaryText="Line Size"
              secondaryText={lineSize}
            ></ListItem>
          </List>

          <RaisedButton
            label="Confirm & Continue"
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

export default Confirm;
