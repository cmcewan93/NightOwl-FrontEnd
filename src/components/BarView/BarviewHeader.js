import React from "react";
import Barname from "../NavBar/Barname";
import Burger from "../NavBar/Burger";

const headerStyle = {
  display: "flex",
  justifyContent: "center",
  overflow: "hidden"
};

class BarviewHeader extends React.Component {
  render() {
  
    return (
      <div style={headerStyle}>
        <Barname currentBar={this.props.bar} />
        <Burger />
      </div>
    );
  }
}
export default BarviewHeader;
