import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";

import Confirm from "./Confirm";
import Success from "./Success";

export class UserForm extends Component {
  state = {
    step: 1,
    musicType: "",
    price: "",
    dressCode: "",
    ageRange: "",
    lineSize: "",
    womenMenRatio: ""
  };

  // proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // go back to the previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const {
      musicType,
      price,
      dressCode,
      ageRange,
      lineSize,
      womenMenRatio
    } = this.state;
    const values = {
      musicType,
      price,
      dressCode,
      ageRange,
      lineSize,
      womenMenRatio
    };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 3:
        return <Success />;
    }
  }
}

export default UserForm;
