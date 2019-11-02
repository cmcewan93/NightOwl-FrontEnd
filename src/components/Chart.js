import React from "react";

import PieChart from "react-minimal-pie-chart";

const pieStyle = {
  left: 0,
  position: "fixed"
};

class FemaleMaleRatio extends React.Component {
  render() {
    return (
      <div className="chart" style={pieStyle}>
        <PieChart
          radius={30}
          label={({ data, dataIndex }) =>
            Math.round(data[dataIndex].percentage) +
            "%   " +
            data[dataIndex].title
          }
          labelPosition={55}
          labelStyle={{
            fill: "#f3f3f3",
            fontFamily: "sans-serif",
            fontSize: "3.45px"
          }}
          ratio={1.2}
          data={[
            { title: "Females", value: 10, color: "#F012BE" },
            { title: "Males", value: 15, color: "#0074D9" },
            { title: "Unspecified", value: 20, color: "grey" }
          ]}
        />
      </div>
    );
  }
}
export default FemaleMaleRatio;
