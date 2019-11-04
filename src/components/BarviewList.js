import React from "react";
import BarviewListItem from "./BarviewListItem";
import BarviewHeader from "./BarviewHeader";
import Arrow from "./BackButton";

import BarviewFooter from "./BarviewFooter";

class BarviewList extends React.Component {
  render() {
    return (
      <div>
        <BarviewHeader />
        <Arrow />
        <BarviewListItem />
        <BarviewFooter />
      </div>
    );
  }
}

export default BarviewList;
