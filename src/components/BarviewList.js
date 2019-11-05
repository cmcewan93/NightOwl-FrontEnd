import React from "react";
import Axios from "axios";

import BarviewListItem from "./BarviewListItem";
import BarviewHeader from "./BarviewHeader";
import Arrow from "./BackButton";
import BarviewFooter from "./BarviewFooter";

class BarviewList extends React.Component {
  state = {
    currentVists: [],
    currentBar: {},
    currentReviews: []
  };

  componentDidMount() {
    Axios.get(`/api/visits/${this.props.bar.id}`).then(response => {
      console.log("We have visits", response);
      this.setState({
        currentVisits: response.data,
        currentBar: this.props.bar
      });
    });
    Axios.get(`/api/reviews/${this.props.bar.id}`).then(response => {
      console.log("We have Reviews", response);
      this.setState({ currentReviews: response.data });
    });
  }

  render() {
    // console.log("bar id", this.props.bar.id);
    console.log("state", this.props);
    console.log("current bar", this.props.bar);
    return (
      <div>
        <BarviewHeader bar={this.props.bar} />
        <Arrow />
        <BarviewListItem />
        <BarviewFooter
          currentBar={this.state.currentBar}
          currentVisits={this.state.currentVisits}
          currentReviews={this.state.currentReviews}
        />
      </div>
    );
  }
}

export default BarviewList;
