import React from "react";
import logo from "../public/NightOwlLogo.png";

const style = {
  width: '50%',
  display: 'flex',
}

export default function Logo() {
  return (
    <>
      <img style={style} src={logo} />
    </>
  );
}
