import React from "react";
// import Chart from "react-apexcharts";

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

// class FemaleMaleRatio extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       options: {
//         chart: {
//           background: "#f4f4f4",
//           foreColor: "#333"
//         },
//         xaxis: {
//           categories: ["females", "males"]
//         },
//         plotOptions: {
//           bar: {
//             horizontal: false
//           }
//         },
//         fill: {
//           colors: ["#f44336"]
//         },
//         dataLabels: {
//           enables: false
//         },
//         title: {
//           text: "Females vs Males Ratio",
//           align: "center",
//           margin: 20,
//           offsetY: 20,
//           style: {
//             fontSize: "25px"
//           }
//         }
//       },
//       series: [
//         {
//           name: "Quantities/Visits",
//           data: [10, 20]
//         }
//       ]
//     };
//   }
//   render() {
//     return (
//       <Chart
//         options={this.state.options}
//         series={this.state.series}
//         style={{ position: "fixed", bottom: "0", width: "100%" }}
//         type="bar"
//         height="200"
//         width="100%"
//       />
//     );
//   }
// }

// export default FemaleMaleRatio;
