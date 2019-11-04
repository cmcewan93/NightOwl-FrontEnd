import React from "react";
import BarviewIcons from "./BarviewIcons";
import Chart from "./Chart";

const totalSize = {
  position: "fixed",
  bottom: 0,
  height: "50%",
  width: "100%",
  backgroundColor: "#373a47"
};

class BarviewContainer extends React.Component {
  render() {
    return (
      <div style={totalSize}>
        <BarviewIcons />
        <Chart />
      </div>
    );
  }
}
export default BarviewContainer;
