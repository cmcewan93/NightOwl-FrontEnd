import React from "react";
import Camera from "./Camera";
import UserForm from "./Form/UserForm";
import BarviewHeader from "./BarviewHeader";

export default function FourthView(props) {
  return (
    <>
      <div>
        <BarviewHeader bar={props.bar} />
        <Camera />
        <UserForm style={{ backgroundColor: "#373a47" }} />
      </div>
    </>
  );
}
