import React from "react";
import { ReactComponent as Fire } from "../../images/fire.svg";
import { ReactComponent as Boy } from "../../images/boy.svg";
import { ReactComponent as Girl } from "../../images/girl.svg";
import { ReactComponent as Clock } from "../../images/clock.svg";
import { ReactComponent as Bar } from "../../images/bar.svg";
import { ReactComponent as Graph } from "../../images/graph.svg";
import { ReactComponent as Coin } from "../../images/coin.svg";
import { ReactComponent as Coins } from "../../images/coins.svg";

const componentStyle = {
  position: "absolute",
  bottom: "0px",
  display: "grid",
  gridTemplateColumns: "auto auto auto auto",
  alignItems: "center",
  marginBottom: "1px"
};

const imageSize = {
  height: "36px",
  width: "84px"
};

const alignment = {
  paddingLeft: "10px",
  color: "#b8b7ad"
};

const textAlign = {
  paddingLeft: "16px",
  color: "#b8b7ad"
};

const textAlign2 = {
  paddingLeft: "25px",
  color: "#b8b7ad"
};

const colorGrey = {
  color: "#b8b7ad"
};

class FilterItemList extends React.Component {
  render() {
    return (
      <div className="filterItemList" style={componentStyle}>
        <div>
          <Fire
            style={imageSize}
            onClick={() => this.props.updateMarkers("trending")}
          />
          <span style={alignment}>Trending</span>
        </div>
        <div>
          <Boy
            style={imageSize}
            onClick={() => this.props.updateMarkers("moremales")}
          />
          <span style={alignment}>More Men</span>
        </div>

        <div>
          <Girl
            style={imageSize}
            onClick={() => this.props.updateMarkers("morefemales")}
          />
          <span style={colorGrey}>More Women</span>
        </div>

        <div>
          <Graph
            style={imageSize}
            onClick={() => this.props.updateMarkers("twentyfive")}
          />
          <span style={textAlign2}>25+</span>
        </div>

        <div>
          <Bar style={imageSize} onClick={this.props.allMarkers} />
          <span style={textAlign}>All Bars</span>
        </div>
        <div>
          <Clock
            style={imageSize}
            onClick={() => this.props.updateMarkers("shortest")}
          />
          <span style={colorGrey}>Shortest Wait</span>
        </div>
        <div>
          <Coin
            style={imageSize}
            onClick={() => this.props.updateMarkers("cheapest")}
          />
          <span style={alignment}>Cheapest</span>
        </div>
        <div>
          <Coins
            style={imageSize}
            onClick={() => this.props.updateMarkers("priciest")}
          />
          <span style={textAlign}>Priciest</span>
        </div>
      </div>
    );
  }
}

export default FilterItemList;
