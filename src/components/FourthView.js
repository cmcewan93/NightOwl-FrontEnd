import React, { useState } from "react";
import Camera from "./Camera";
import UserForm from "./UserForm";

export default function FourthView() {
  const [showCamera, updateShowCamera] = useState(false);

  return (
    <>
      <div>
        <button
          className="ui primary button"
          style={{
            display: "block",
            margin: "auto"
          }}
          onClick={() => updateShowCamera(!showCamera)}
        >
          {showCamera ? "Shut down camera" : "Take a photo"}
        </button>
        {showCamera && <Camera />}
        <UserForm />
      </div>
    </>
  );
}
