import React from "react";
import BarviewListItem from "./BarviewListItem";
import BarviewHeader from "./BarviewHeader";
import Arrow from "./BackButton";

import BarviewContainer from "./BarviewFooter";

class BarviewList extends React.Component {
  render() {
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
