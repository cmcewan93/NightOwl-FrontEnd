import React from "react";

import PieChart from "react-minimal-pie-chart";

const pieStyle = {
  position: "fixed",
  right: "0px",
  bottom: "-20px",
  width: "375px"
};

class Chart extends React.Component {
  render() {
    return (
      <div className="chart">
        <PieChart
          style={pieStyle}
          radius={20}
          label={({ data, dataIndex }) =>
            Math.round(data[dataIndex].percentage) +
            "%   " +
            data[dataIndex].title
          }
          labelPosition={55}
          labelStyle={{
            fill: "#f3f3f3",
            fontFamily: "sans-serif",
            fontSize: "2.5px"
          }}
          ratio={1.2}
          data={[
            { title: "Females", value: 10, color: "#F17CB0" },
            { title: "Males", value: 15, color: "#5DA5DA" }
          ]}
        />
      </div>
    );
  }
}
export default Chart;
