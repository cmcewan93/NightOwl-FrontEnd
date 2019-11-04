import React from "react";
import Barname from "./Barname";
import Burger from "./Burger";

const headerStyle = {
  display: "flex",
  justifyContent: "center"
};

class BarviewHeader extends React.Component {
  render() {
    return (
      <div style={headerStyle}>
        <Barname />
        <Burger />
      </div>
    );
  }
}
export default BarviewHeader;
