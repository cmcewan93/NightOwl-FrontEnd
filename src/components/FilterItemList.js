import React from "react";

const componentStyle = {
  position: "absolute",
  bottom: "0px",
  display: "grid",
  gridTemplateColumns: "auto auto auto auto",
  width: "100%",
  height: "18.7%",
  alignItems: "center"
};

const gridItem = {
  fontSize: "30px",
  justifySelf: "center"
};

class FilterItemList extends React.Component {
  render() {
    return (
      <div className="filterItemList" style={componentStyle}>
        <i className="hotjar icon" style={gridItem}></i>
        <i className="users icon" style={gridItem}></i>
        <i className="female icon" style={gridItem}></i>
        <i className="male icon" style={gridItem}></i>
        <i className="road icon" style={gridItem}></i>
        <i className="music icon" style={gridItem}></i>
        <i className="dollar sign icon" style={gridItem}></i>
        <i className="euro sign icon" style={gridItem}></i>
      </div>
    );
  }
}
export default FilterItemList;
