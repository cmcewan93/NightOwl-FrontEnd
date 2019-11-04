import React from "react";
import BarviewListItem from "./BarviewListItem";
import BarviewHeader from "./BarviewHeader";
import Arrow from "./BackButton";
import Axios from "axios";

import BarviewContainer from "./BarviewFooter";

const wholePage = {
  width: "375px",
  height: "667px"
};

class BarviewList extends React.Component {
  state = {
    ratio: []
  };

  updateChart = async () => {
    const { data } = await Axios.get(`/api/venues/`);

    this.setState({ ratio: data });
  };

  render() {
    return (
      <div style={wholePage}>
        <BarviewHeader />
        <Arrow />
        <BarviewListItem />
        <BarviewContainer />
      </div>
    );
  }
}

export default BarviewList;
