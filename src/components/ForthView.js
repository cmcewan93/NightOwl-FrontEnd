import React from "react";
import Camera from "./Camera";
import UserForm from "./Form/UserForm";
import BarviewHeader from "./BarviewHeader";
import { useEffect, useState } from "react";

export default function FourthView(props) {
  const [state, setState] = useState({
    currentVists: [],
    currentBar: {}
  });
  console.log("fourth vieww", props);

  useEffect(() => {
    setState({ currentBar: props.bar });
  }, []);
  //console.log('4th view state', state.currentBar)
  return (
    <>
      <div>
        <BarviewHeader bar={state.currentBar} />
        <Camera />
        <UserForm style={{ backgroundColor: "#373a47" }} />
      </div>
    </>
  );
}
