import React from "react";
import BarviewIcons from "./BarviewIcons";
import Chart from "./Chart";

const totalSize = {
  position: "fixed",
  bottom: 0,
  height: "54%",
  width: "100%",
  backgroundColor: "#373a47"
};

class BarviewFooter extends React.Component {
  render() {
    //console.log('BarFooter props', this.props)
    return (
      <div style={totalSize}>
        <BarviewIcons currentBar={this.props.currentBar} currentVisits={this.props.currentVisits} currentReviews={this.props.currentReviews}/>
        <Chart currentBar={this.props.currentBar} currentVisits={this.props.currentVisits} currentReviews={this.props.currentReviews}/>
      </div>
    );
  }
}
export default BarviewFooter;
