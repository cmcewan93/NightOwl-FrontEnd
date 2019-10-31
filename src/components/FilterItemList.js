import React from "react";

const containerStyle = {
  height: "30%",
  width: "100%"
};

class FilterItemList extends React.Component {
  render() {
    return (
      <div className={containerStyle}>
        <i className="hotjar icon"></i>
        <i className="users icon"></i>
        <i className="female icon"></i>
        <i className="male icon"></i>
        <i className="road icon"></i>
        <i className="music icon"></i>
        <i className="dollar sign icon"></i>
        <i className="euro sign icon"></i>
      </div>
    );
  }
}
export default FilterItemList;
