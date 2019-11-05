import React from "react";
import { ReactComponent as Google } from "../images/googlefooter.svg";
import { ReactComponent as Pint } from "../images/pint.svg";
import { ReactComponent as Check } from "../images/point.svg";
import { ReactComponent as Uber } from "../images/uber.svg";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

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

const fontColor = {
  color: "#b8b7ad"
};

const fontAlignment = {
  color: "#b8b7ad",
  marginLeft: "10px"
};

export default function BarFooter(props) {
  console.log("COMPLETE OBJ", props.bar);
  let completeAddress = "";
  if (props.bar !== undefined) {
    completeAddress = encodeURIComponent(
      `${props.bar.name}, ${props.bar.address}, ${props.bar.city}, ${props.bar.province}, ${props.bar.country}`
    );
  }

  let barLatitude = "";
  if (props.bar != undefined) {
    barLatitude = props.bar.latitude;
  }

  let barLongitude = "";
  if (props.bar != undefined) {
    barLongitude = props.bar.longitude;
  }

  let barId = "";
  if (props.bar != undefined) {
    barId = props.bar.id;
  }

  return (
    <div id="b-foot" style={footerStyle}>
      <ul style={listStyle}>
        <li>
          <Link to={`/bar/:${barId}`}>
            <Pint style={iconStyle} />
            <span span style={fontColor}>
              View Bar
            </span>
          </Link>
        </li>
        <li>
          <Link to={`/bar/checkin/:${barId}`}>
            <Check style={iconStyle} />
            <span span style={fontColor}>
              Check In
            </span>
          </Link>
        </li>
        <li>
          <a href={`https://maps.google.com/maps?q=${completeAddress}`}>
            <Google style={iconStyle} />
            <span span style={fontColor}>
              Directions
            </span>
          </a>
        </li>
        <li>
          <a
            href={`https://m.uber.com/ul/?action=setPickup&client_id=YuXED_2gMxypW4z2Gl1x_q92auVkf9cv&pickup=my_location&dropoff[formatted_address]=${completeAddress}&dropoff[latitude]=${barLatitude}&dropoff[longitude]=${barLongitude}`}
          >
            <Uber style={iconStyle} />
            <span style={fontAlignment}>Uber</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
