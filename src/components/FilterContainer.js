import React from "react";

import Trending from "./TrendingFilter";
import MostMales from "./MostMalesFilter";
import MostFemales from "./MostFemalesFilter";
import ShortestDistance from "./ShortestDistanceFilter";
import LineSize from "./LineSizeFilter";
import MusicType from "./MusicTypeFilter";
import CheapestPrice from "./CheapestPriceFilter";
import ExpensivePrice from "./ExpensivePriceFilter";

const formStyle = {
  backgroundColor: "grey",
  height: "100%",
  width: "100%"
};

class FilterContainer extends React.Component {
  render() {
    return (
      <form style={formStyle}>
        <Trending />
        <MostMales />
        <MostFemales />
        <ShortestDistance />
        <LineSize />
        <MusicType />
        <CheapestPrice />
        <ExpensivePrice />
      </form>
    );
  }
}

export default FilterContainer;
