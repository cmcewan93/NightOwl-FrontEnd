import React from "react";
import UserForm from "./UserForm";
// import Burger from "./Burger";
// import Barname from "./Barname";
import BackButton from "./BackButton";
import BarviewHeader from "./BarviewHeader";

export default function FourthView() {
  return (
    <div>
      <BackButton />
      <BarviewHeader />
      <UserForm></UserForm>
    </div>
  );
}
