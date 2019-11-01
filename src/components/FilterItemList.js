import React from "react";
import Axios from "axios";

const componentStyle = {
  position: "absolute",
  bottom: "0px",
  display: "grid",
  gridTemplateColumns: "auto auto auto auto",
  width: "100%",
  height: "17.5%",
  alignItems: "center",
  marginBottom: "1px"
};

const gridItemBlack = {
  fontSize: "30px",
  justifySelf: "center",
  color: "black"
};

const gridItemRed = {
  fontSize: "30px",
  justifySelf: "center",
  color: "red"
};

const gridItemPink = {
  fontSize: "30px",
  justifySelf: "center",
  color: "pink"
};

const gridItemBlue = {
  fontSize: "30px",
  justifySelf: "center",
  color: "blue"
};

const gridItemGreen = {
  fontSize: "30px",
  justifySelf: "center",
  color: "green"
};

const gridItemYellow = {
  fontSize: "30px",
  justifySelf: "center",
  color: "gold"
};

class FilterItemList extends React.Component {
  render() {
    return (
      <div className="filterItemList" style={componentStyle}>
        <i
          className="hotjar icon"
          style={gridItemRed}
          onClick={this.props.changeMarkers}
        ></i>
        <i className="users icon" style={gridItemGreen}></i>
        <i className="female icon" style={gridItemPink}></i>
        <i className="male icon" style={gridItemBlue}></i>
        <i className="road icon" style={gridItemBlack}></i>
        <i className="music icon" style={gridItemBlack}></i>
        <i className="dollar sign icon" style={gridItemGreen}></i>
        <i className="euro sign icon" style={gridItemYellow}></i>
      </div>
    );
  }
}

export default FilterItemList;
