import React from "react";
import BarviewListItem from "./BarviewListItem";
import FemaleMaleRatio from "./Charts";
import Burger from "./Burger";
import "./App.css";
import Axios from "axios";

const Barname = () => {
  return <h3 className="barname">Barname</h3>;
};

const BackButton = () => {
  return <i className="chevron left icon"></i>;
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
    console.log(this.state.ratio);
    return (
      <>
        <BackButton style={{}} />
        <Barname />
        <Burger />
        <BarviewListItem />
        <FemaleMaleRatio />
      </>
    );
  }
}

export default BarviewList;
