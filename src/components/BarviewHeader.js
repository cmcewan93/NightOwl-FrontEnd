import React from "react";
import Barname from "./Barname";
import Burger from "./Burger";

const headerStyle = {
  display: "flex",
  justifyContent: "center",
  overflow: "hidden"
};

class BarviewHeader extends React.Component {
  render() {
    return (
      <div style={headerStyle}>
        <Barname currentBar={this.props.currentBar} />
        <Burger />
      </div>
    );
  }
}
export default BarviewHeader;
