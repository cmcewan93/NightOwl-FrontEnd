import React from "react";
import { ReactComponent as Smartphone } from "../images/smartphone.svg";
import { ReactComponent as Address } from "../images/bar.svg";
import { ReactComponent as Age } from "../images/-18.svg";
import { ReactComponent as LineSize } from "../images/clock.svg";
import { ReactComponent as Price } from "../images/money-bag.svg";
import { ReactComponent as Music } from "../images/quaver.svg";
import { ReactComponent as DressCode } from "../images/dress-code.svg";

const containerStyle = {
  position: "fixed",
  bottom: "190px",
  left: "0px",
  display: "grid",
  gridTemplateColumns: "auto auto",
  marginBottom: "1px"
};

const IconStyle = {
  width: "8%",
  height: "1%",
  marginRight: "10px"
};

const textDesign = {
  color: "#b8b7ad"
};

export default function BarviewIcons() {
  return (
    <div style={containerStyle}>
      <i className="phone">
        <Smartphone style={IconStyle} />
        <span style={textDesign}>Phone: 416-317-3158</span>
      </i>

      <i className="address">
        <Address style={IconStyle} />
        <span style={textDesign}>Address: 123 Toronto St W</span>
      </i>

      <i className="age">
        <Age style={IconStyle} />
        <span style={textDesign}>Average Age: 20</span>
      </i>

      <i className="linesize">
        <LineSize style={IconStyle} />
        <span style={textDesign}>Average Line Size: 20</span>
      </i>

      <i className="price">
        <Price style={IconStyle} />
        <span style={textDesign}>Approximate Cost: $20</span>
      </i>

      <i className="music">
        <Music style={IconStyle} />
        <span style={textDesign}>Music Type: Rock</span>
      </i>

      <i className="dresscode">
        <DressCode style={IconStyle} />
        <span style={textDesign}>Dress Code: Casual</span>
      </i>
    </div>
  );
}
