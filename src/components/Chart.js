import React from "react";

import PieChart from "react-minimal-pie-chart";

export default function FemaleMaleRatio() {
  return (
    <PieChart
      radius={20}
      label
      labelPosition={20}
      labelStyle={{
        fill: "#f3f3f3",
        fontFamily: "sans-serif",
        fontSize: "5px"
      }}
      ratio={1.08}
      style={{ position: "fixed", bottom: "0" }}
      data={[
        { title: "Females", value: 10, color: "#F012BE" },
        { title: "Males", value: 15, color: "#001f3f" }
      ]}
    />
  );
}
