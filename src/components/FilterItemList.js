import React from "react";
import { ReactComponent as Fire } from "../images/fire.svg";
import { ReactComponent as Boy } from "../images/boy.svg";
import { ReactComponent as Girl } from "../images/girl.svg";
import { ReactComponent as Clock } from "../images/clock.svg";
import { ReactComponent as Bar } from "../images/bar.svg";
import { ReactComponent as Music } from "../images/music.svg";
import { ReactComponent as Coin } from "../images/coin.svg";
import { ReactComponent as Coins } from "../images/coins.svg";

const componentStyle = {
  position: "absolute",
  bottom: "0px",
  display: "grid",
  gridTemplateColumns: "auto auto auto auto",
  alignItems: "center",
  marginBottom: "1px"
};

const imageSize = {
  height: "34px",
  width: "85px"
};

const alignment = {
  position: "center"
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
          Trending
        </div>
        <div>
          <Clock
            style={imageSize}
            onClick={() => this.props.updateMarkers("trending")}
          />
          Shortest Wait
        </div>
        <div>
          <Girl
            style={imageSize}
            onClick={() => this.props.updateMarkers("morefemales")}
          />
          More Women
        </div>
        <div>
          <Boy
            style={imageSize}
            onClick={() => this.props.updateMarkers("moremales")}
          />
          More Men
        </div>
        <div>
          <Bar style={imageSize} onClick={this.props.allMarkers} />
          All Bars
        </div>
        <div>
          <Music style={imageSize} />
          Music
        </div>
        <div>
          <Coin style={imageSize} />
          Cheapest
        </div>
        <div>
          <Coins style={imageSize} />
          Priciest
        </div>
      </div>
    );
  }
}

export default FilterItemList;
