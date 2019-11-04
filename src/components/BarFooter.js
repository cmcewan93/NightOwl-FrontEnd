import React from "react";
import BarFooterButton from "./BarFooterButton";
const footerStyle = {
  display: "none",
  height: "20vh",
  width: "100vw",
  position: "absolute",
  bottom: "0px"
};

export default function BarFooter(props) {
  //console.log('Bar Footer', props)
  return (
    <div id="b-foot" style={footerStyle}>
      <BarFooterButton
        name={"View Bar"}
        path={`/bar/:${props.barId}`}
      ></BarFooterButton>
      <BarFooterButton
        name={"Check in"}
        path={`/bar/checkin/:${props.barId}`}
      ></BarFooterButton>
    </div>
  );
}
