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
  width: "100%",
  height: "17.5%",
  alignItems: "center",
  marginBottom: "1px"
};

const imageSize = {
  height: "50",
  width: "50"
};

class FilterItemList extends React.Component {
  render() {
    return (
      <div className="filterItemList" style={componentStyle}>
        <button onClick={() => this.props.updateMarkers("trending")}>
          <Fire style={imageSize} />
        </button>
        <button onClick={() => this.props.updateMarkers("trending")}>
          <Clock style={imageSize} />
        </button>
        <button onClick={() => this.props.updateMarkers("morefemales")}>
          <Girl style={imageSize} />
        </button>

        <button onClick={() => this.props.updateMarkers("moremales")}>
          <Boy style={imageSize} />
        </button>

        <button onClick={this.props.allMarkers}>
          <Bar style={imageSize} />
        </button>

        <button>
          <Music style={imageSize} />
        </button>

        <button>
          <Coin style={imageSize} />
        </button>

        <button>
          <Coins style={imageSize} />
        </button>
      </div>
    );
  }
}

export default FilterItemList;
