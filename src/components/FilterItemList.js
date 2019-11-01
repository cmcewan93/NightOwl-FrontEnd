import React from "react";

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
        <button onClick={() => this.props.updateMarkers("trending")}>
          <i className="hotjar icon" style={gridItemRed}></i>
        </button>
        <button onClick={() => this.props.updateMarkers("trending")}>
          <i className="clock outline icon" style={gridItemGreen}></i>
        </button>
        <button onClick={() => this.props.updateMarkers("morefemales")}>
          <i className="female icon" style={gridItemPink}></i>
        </button>

        <button onClick={() => this.props.updateMarkers("moremales")}>
          <i className="male icon" style={gridItemBlue}></i>
        </button>

        <button onClick={this.props.allMarkers}>
          <i className="users icon" style={gridItemBlack}></i>
        </button>

        <button>
          <i className="music icon" style={gridItemBlack}></i>
        </button>

        <button>
          <i className="dollar sign icon" style={gridItemGreen}></i>
        </button>

        <button>
          <i className="euro sign icon" style={gridItemYellow}></i>
        </button>
      </div>
    );
  }
}

export default FilterItemList;
