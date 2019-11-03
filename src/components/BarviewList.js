import React from "react";
import BarviewListItem from "./BarviewListItem";
import FemaleMaleRatio from "./Chart";
import Burger from "./Burger";
import "./BarviewList.css";
import Axios from "axios";
import BackButton from "./BackButton";
import BarviewIcons from "./BarviewIcons";
import Barname from "./Barname";

class BarviewList extends React.Component {
  state = {
    ratio: []
  };

  updateChart = async () => {
    const { data } = await Axios.get(`/api/venues/`);

    this.setState({ ratio: data });
  };

  render() {
    //console.log(this.state.ratio);
    return (
      <>
        <BackButton />
        <Barname />
        <Burger />
        <BarviewListItem />
        <FemaleMaleRatio />
        <BarviewIcons />
      </>
    );
  }
}

export default BarviewList;
