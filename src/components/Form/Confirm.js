import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";
import { Typography } from "@material-ui/core";

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
      values: { musicType, price, dressCode, lineSize }
    } = this.props;

    return (
      <MuiThemeProvider>
        <>
          <div style={{ marginLeft: "60px" }}>
            <div style={{ marginTop: "30px" }}>
              <Typography gutterBottom>
                Please confirm your selections!
              </Typography>
            </div>
            <List>
              <ListItem
                primaryText="Music Type"
                secondaryText={musicType}
              ></ListItem>
              <ListItem
                primaryText="Cover Price"
                secondaryText={`$ ${price}`}
              ></ListItem>
              <ListItem
                primaryText="Dress Code"
                secondaryText={dressCode}
              ></ListItem>
              <ListItem
                primaryText="Line Size"
                secondaryText={`${lineSize} minutes`}
              ></ListItem>
            </List>

            <RaisedButton
              label="Confirm"
              primary={true}
              style={(styles.button, styles.rightarea)}
              onClick={this.continue}
            />
            <RaisedButton
              label="Back"
              primary={false}
              style={styles.button}
              onClick={this.back}
            />
          </div>
        </>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    padding: "15",
    marginTop: "20px"
  },
  rightarea: {
    marginRight: "50px"
  }
};

export default Confirm;
