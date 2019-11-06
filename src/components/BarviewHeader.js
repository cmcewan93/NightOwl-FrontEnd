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
    // console.log('here', this.props);
    return (
      <div style={headerStyle}>
        <Barname currentBar={this.props.bar} />
        <Burger />
      </div>
    );
  }
}
export default BarviewHeader;
