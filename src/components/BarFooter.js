import React from "react";
import BarFooterButton from "./BarFooterButton";
import { ReactComponent as Google } from "../images/googlefooter.svg";
import { ReactComponent as Pint } from "../images/pint.svg";
import { ReactComponent as Check } from "../images/point.svg";
import { ReactComponent as Uber } from "../images/uber.svg";

const footerStyle = {
  display: "none",
  height: "20vh",
  width: "100vw",
  position: "absolute",
  bottom: "15px"
};

const listStyle = {
  display: "grid",
  gridTemplateColumns: "auto auto auto auto",
  listStyleType: "none"
};

const iconStyle = {
  height: "60px",
  width: "60px"
};

export default function BarFooter(props) {
  // console.log(props.bar);
  let barName = "";
  if (props.bar != undefined) {
    barName = encodeURIComponent(props.bar.name);
  }
  console.log("THIS IS THE BAR NAME", barName);
  return (
    <div id="b-foot" style={footerStyle}>
      <ul style={listStyle}>
        <li>
          <BarFooterButton
            name={"View Bar"}
            path={`/bar/:${props.barId}`}
            icon={<Pint style={iconStyle} />}
          ></BarFooterButton>
        </li>
        <li>
          <BarFooterButton
            name={"Check in"}
            path={`/bar/checkin/:${props.barId}`}
            icon={<Check style={iconStyle} />}
          ></BarFooterButton>
        </li>
        <li>
          <a href={`https://maps.google.com/maps?q=${barName}`}>
            <Google style={iconStyle} />
          </a>
        </li>
        <li>
          <BarFooterButton
            name={"Uber"}
            path={`/bar/checkin/:${props.barId}`}
            icon={<Uber style={iconStyle} />}
          ></BarFooterButton>
        </li>
      </ul>
    </div>
  );
}
