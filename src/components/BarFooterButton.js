import React from "react";

export default function BarFooterButton(props) {
  return (
    <div>
      <button
        onClick={() => {
          console.log("REDIRECT TO HERE", props.path);
        }}
      >
        {props.name}
      </button>
    </div>
  );
};
