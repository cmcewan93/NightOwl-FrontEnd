import React from "react";
import BarviewListItem from "./BarviewListItem";
import FemaleMaleRatio from "./Chart";
import Burger from "./Burger";
import "./BarviewList.css";
import Axios from "axios";

const AgeIcon = () => {
  return (
    <>
      <i className="phone icon"></i>
      <p className="phone-number">Phone number: 20</p>
      <i className="exchange icon"></i>
      <p className="address">Address: 20</p>

      <i className="smile outline icon"></i>
      <p className="age">Average age: 20</p>
      <i className="users usersa icon"></i>
      <p className="linesize">Line size: 20</p>
      <i className="dollar dollara sign icon"></i>
      <p className="price">Average price: 20</p>
      <i className="music musica icon"></i>
      <p className="music-type">Music type: 20</p>
      <i className="user secret icon"></i>
      <p className="dress-code">Dress code: 20</p>
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
    //console.log(this.state.ratio);
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
