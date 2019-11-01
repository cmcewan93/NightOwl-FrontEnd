import React from "react";
import BarviewListItem from "./BarviewListItem";
import FemaleMaleRatio from "./Charts";
import Axios from "axios";

class BarviewList extends React.Component {
  state = {
    ratio: []
  };

  updateChart = async () => {
    const { data } = await Axios.get(`/api/venues/`);

    this.setState({ ratio: data });
  };

  render() {
    console.log(this.state.ratio);
    return (
      <>
        <BarviewListItem />
        <FemaleMaleRatio />
      </>
    );
  }
}

export default BarviewList;
