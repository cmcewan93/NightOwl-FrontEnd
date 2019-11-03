import React from "react";
import { ReactComponent as Smartphone } from "../images/smartphone.svg";
import { ReactComponent as Address } from "../images/address.svg";
import { ReactComponent as Age } from "../images/-18.svg";
import { ReactComponent as LineSize } from "../images/alarm-clock.svg";
import { ReactComponent as Price } from "../images/money-bag.svg";
import { ReactComponent as Music } from "../images/quaver.svg";
import { ReactComponent as DressCode } from "../images/dress-code.svg";

const IconStyle = {
  width: "8%",
  height: "1%",
  marginRight: "10px"
};

export default function BarviewIcons() {
  return (
    <>
      <i className="phone">
        <Smartphone style={IconStyle} />
        123456-789
      </i>

      <i className="address">
        <Address style={IconStyle} />
        123 Toronto st W
      </i>

      <i className="age">
        <Age style={IconStyle} />
        Average Age: 20
      </i>

      <i className="linesize">
        <LineSize style={IconStyle} />
        20
      </i>

      <i className="price">
        <Price style={IconStyle} />$ 20
      </i>

      <i className="music">
        <Music style={IconStyle} />
        Rock
      </i>

      <i className="dresscode">
        <DressCode style={IconStyle} />
        Casual
      </i>
    </>
  );
}
