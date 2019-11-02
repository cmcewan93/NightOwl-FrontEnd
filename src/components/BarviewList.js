import React from "react";
import BarviewListItem from "./BarviewListItem";
import FemaleMaleRatio from "./Chart";
import Burger from "./Burger";
import "./BarviewList.css";
import Axios from "axios";

const AgeIcon = () => {
  return (
    <>
      <i className="smile outline icon"></i>
      <p className="age">Average age: 20</p>
      <i className="usersa icon"></i>
      <p className="linesize">Line size: 20</p>
      <i className="dollara sign icon"></i>
      <p className="price">Average price: 20</p>
      <i className="musica icon"></i>
      <p className="music-type">Average price: 20</p>
      <i className="user secret icon"></i>
      <p className="dress-code">Average price: 20</p>
    </>
  );
};

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
    // console.log(this.state.ratio);
    return (
      <>
        <BackButton style={{}} />
        <Barname />
        <Burger />
        <BarviewListItem />
        <FemaleMaleRatio />
        <AgeIcon />
      </>
    );
  }
}

export default BarviewList;
