import React from "react";
import Axios from "axios";

import BarviewListItem from "./BarviewListItem";
import BarviewHeader from "./BarviewHeader";
import Arrow from "./BackButton";
import BarviewContainer from "./BarviewFooter";

class BarviewList extends React.Component {
  state = {
    currentVists: [],
    currentBar: {},
    currentReviews: []
  };

  componentDidMount() {
    Axios.get(`/api/visits/${this.props.bar.id}`).then(response => {
     console.log('We have a response', response)
      this.setState({ currentVisits: response.data, currentBar: this.props.bar });
    });
    Axios.get(`/api/reviews/${this.props.bar.id}`).then(response => {
      console.log('We have Reviews', response)
       this.setState({currentReviews: response.data });
     });
  }

  render() {
    console.log("bar id", this.props.bar.id);
    console.log("bar name", this.props.bar);
    console.log("current visits", this.state.currentVisits);
    return (
      <div>
        <BarviewHeader />
        <Arrow />
        <BarviewListItem />
        <BarviewContainer />
      </div>
    );
  }
}

export default BarviewList;
