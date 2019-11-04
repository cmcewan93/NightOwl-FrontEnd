import React from "react";
import { ReactComponent as Smartphone } from "../images/smartphone.svg";
import { ReactComponent as Google } from "../images/google.svg";
import { ReactComponent as Age } from "../images/-18.svg";
import { ReactComponent as DressCode } from "../images/dress-code.svg";

const containerStyle = {
  position: "fixed",
  bottom: "155px",
  left: "8px",
  display: "grid",
  gridTemplateColumns: "auto",
  marginBottom: "1px"
};

const IconStyle = {
  width: "8%",
  height: "5%",
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
        <span style={textDesign}>Contact</span>
      </i>

      <i className="address">
        <Google style={IconStyle} />
        <span style={textDesign}>Directions</span>
      </i>

      <i className="age">
        <Age style={IconStyle} />
        <span style={textDesign}>Average Age: 20</span>
      </i>

      <i className="linesize">
        <Smartphone style={IconStyle} />
        <span style={textDesign}>Average Line Size: 20</span>
      </i>

      <i className="price">
        <Smartphone style={IconStyle} />
        <span style={textDesign}>Approximate Cost: $20</span>
      </i>

      <i className="music">
        <Smartphone style={IconStyle} />
        <span style={textDesign}>Music Type: Rock</span>
      </i>

      <i className="dresscode">
        <DressCode style={IconStyle} />
        <span style={textDesign}>Dress Code: Casual</span>
      </i>
    </div>
  );
}
