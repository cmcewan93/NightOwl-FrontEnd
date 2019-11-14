import React from "react";
import Axios from "axios";

import BarViewImageGallery from "./BarView/BarViewImageGallery";
import BarviewHeader from "./BarView/BarviewHeader";
import Arrow from "./NavBar/BackButton";
import BarviewInfoList from "./BarView/BarviewInfoList";

class BarViewContainer extends React.Component {
  state = {
    currentVists: [],
    currentBar: {},
    currentReviews: []
  };

  componentDidMount() {
    Axios.get(`/api/visits/${this.props.bar.id}`).then(response => {
      this.setState({
        currentVisits: response.data,
        currentBar: this.props.bar
      });
    });
    Axios.get(`/api/reviews/${this.props.bar.id}`).then(response => {
      this.setState({ currentReviews: response.data });
    });
  }

  render() {
    return (
      <div>
        <BarviewHeader bar={this.props.bar} />
        <Arrow />
        <BarViewImageGallery currentReviews={this.state.currentReviews} />
        <BarviewInfoList
          currentBar={this.state.currentBar}
          currentVisits={this.state.currentVisits}
          currentReviews={this.state.currentReviews}
        />
      </div>
    );
  }
}

export default BarViewContainer;
