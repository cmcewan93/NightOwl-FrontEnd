import React from "react";

import PieChart from "react-minimal-pie-chart";

const pieStyle = {
  position: "fixed",
  right: "-80px",
  bottom: "150px",
  width: "375px"
};

class Chart extends React.Component {
  getGenderCount = array => {
    let females = [];
    let males = [];
    if (array !== undefined) {
      males = array.filter(elem => {
        if (elem.gender === "Male") {
          return elem;
        }
      });
      females = array.filter(elem => {
        if (elem.gender === "Female") {
          return elem;
        }
      });
    }
    console.log("FEMALEs", females);
    console.log("Males", males);
    return [males.length, females.length];
  };
  render() {
    console.log(this.props, "dsdaas");
    //console.log("here", this.getGenderCount(this.props.currentVisits));
    let genders = this.getGenderCount(this.props.currentVisits);
    return (
      <div className="chart">
        <PieChart
          style={pieStyle}
          radius={15}
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
            { title: "Females", value: genders[0], color: "#F17CB0" },
            { title: "Males", value: genders[1], color: "#5DA5DA" }
          ]}
        />
      </div>
    );
  }
}
export default Chart;
