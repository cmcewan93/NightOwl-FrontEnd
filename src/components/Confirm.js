import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { List, ListItem } from "material-ui/List";
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
          <div style={{ marginLeft: "60px" }}>
            <List>
              <ListItem
                primaryText="Music Type"
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
                primaryText="Age Range"
                secondaryText={ageRange}
              ></ListItem>
              <ListItem
                primaryText="Line Size"
                secondaryText={lineSize}
              ></ListItem>
              <ListItem
                primaryText="Women/Men Ratio"
                secondaryText={womenMenRatio}
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
