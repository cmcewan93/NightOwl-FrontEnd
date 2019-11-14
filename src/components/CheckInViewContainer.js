import React from "react";
// import Camera from "./Camera";
import UserForm from "./Form/UserForm";
import BarviewHeader from "./BarView/BarviewHeader";
import Arrow from "./NavBar/BackButton";
import { useEffect, useState } from "react";

export default function FourthView(props) {
  const [state, setState] = useState({
    currentVists: [],
    currentBar: {}
  });

  useEffect(() => {
    setState({ currentBar: props.bar });
  }, []);
  return (
    <>
      <div>
        <Arrow></Arrow>
        <BarviewHeader bar={state.currentBar} />
        <UserForm style={{ backgroundColor: "#373a47" }} />
      </div>
    </>
  );
}
