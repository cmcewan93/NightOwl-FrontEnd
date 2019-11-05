import React from "react";
import { ReactComponent as Smartphone } from "../images/smartphone.svg";
import { ReactComponent as Google } from "../images/google.svg";
import { ReactComponent as Age } from "../images/-18.svg";
import { ReactComponent as DressCode } from "../images/dress-code.svg";

const containerStyle = {
  position: "fixed",
  bottom: "155px",
  left: "8px",
  display: "grid",
  gridTemplateColumns: "auto",
  marginBottom: "1px"
};

const IconStyle = {
  width: "8%",
  height: "5%",
  marginRight: "10px"
};

const textDesign = {
  color: "#b8b7ad"
};

export default function BarviewIcons(props) {
  console.log("Barview props", props);

  //TODO: REFACTOR FUNCTIONS, same function for finding averages
  const getAverageAge = visits => {
    let ageArray = [];
    let avg;
    //Parse object for array of ages
    if (visits !== undefined) {
      ageArray = visits.map(visit => {
        return parseInt(visit.age);
      });
    }
    //Find average age
    if (ageArray.length) {
      let sum = ageArray.reduce(function(a, b) {
        return parseInt(a + b);
      });
      return Math.round((avg = sum / ageArray.length));
    }
    return avg;
  };

  const getAverageLineSize = reviews => {
    let lineSizeArray = [];
    let avg;
    //Parse object for line sizes
    if (reviews !== undefined) {
      lineSizeArray = reviews.map(review => {
        return review.line_size;
      });
    }
    //Find average line size
    if (lineSizeArray.length) {
      let sum = lineSizeArray.reduce(function(a, b) {
        return a + b;
      });
      //console.log("line size array", lineSizeArray);
      //console.log("sum", sum);
      return Math.round((avg = sum / lineSizeArray.length));
    }
    return avg;
  };

  const getMostCommon = (array, filterValue) => {
    let filteredArray = [];
    //parse object for prices
    if (array !== undefined) {
      filteredArray = array.map(elem => {
        return elem[filterValue];
      });
    }
    //find most frequently reported line price(mode)
    let mode = filteredArray
      .sort(
        (a, b) =>
          filteredArray.filter(v => v === a).length -
          filteredArray.filter(v => v === b).length
      )
      .pop();
    return mode;
  };
  // console.log("average age", getAverageAge(props.currentVisits));
  // console.log("mode", getMostCommon(props.currentReviews, "entry_fee"));

  return (
    <div style={containerStyle}>
      <i className="phone">
        <Smartphone style={IconStyle} />
        <span style={textDesign}>
          <a href={`tel:${props.currentBar.phone_number}`}>
            Contact: {props.currentBar.phone_number}
          </a>
        </span>
      </i>

      <i className="address">
        <Google style={IconStyle} />
        <span style={textDesign}>Directions</span>
      </i>

      <i className="age">
        <Age style={IconStyle} />
        <span style={textDesign}>
          Average Age: {getAverageAge(props.currentVisits)}
        </span>
      </i>

      <i className="linesize">
        <Smartphone style={IconStyle} />
        <span style={textDesign}>
          Line size: {getAverageLineSize(props.currentReviews)} min
        </span>
      </i>

      <i className="price">
        <Smartphone style={IconStyle} />
        <span style={textDesign}>
          Approximate Cost: ${getMostCommon(props.currentReviews, "entry_fee")}
        </span>
      </i>

      <i className="music">
        <Smartphone style={IconStyle} />
        <span style={textDesign}>Music Type: ADD TO DB</span>
        {/* {getMostCommon(props.currentReviews, "music_type")} */}
      </i>
      <i className="dresscode">
        <DressCode style={IconStyle} />
        <span style={textDesign}>
          Dress Code: {getMostCommon(props.currentReviews, "dress_code")}
        </span>
      </i>
    </div>
  );
}
