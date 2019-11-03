import React from "react";

import PieChart from "react-minimal-pie-chart";

export default function FemaleMaleRatio() {
  return (
    <div className="chart">
      <PieChart
        radius={20}
        label={({ data, dataIndex }) =>
          Math.round(data[dataIndex].percentage) + "%"
        }
        labelPosition={40}
        labelStyle={{
          fill: "#f3f3f3",
          fontFamily: "sans-serif",
          fontSize: "5px"
        }}
        ratio={1.4}
        data={[
          { title: "Females", value: 10, color: "#F012BE" },
          { title: "Males", value: 15, color: "#0074D9" },
          { title: "Unisex", value: 20, color: "#111" }
        ]}
      />
    </div>
  );
}
