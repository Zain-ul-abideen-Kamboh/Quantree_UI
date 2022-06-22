import React, { Fragment } from "react";
import OnBoarding from "../../componenets/HowItWorks/OnBoarding";
import Advisory from "../../componenets/HowItWorks/Advisory";
import WhyQuantree from "../../componenets/HowItWorks/WhyQuantree";
import Body from "../../layouts/Body";
const HowItWorks = () => {
  return (
    <Fragment>
      <Body>
      <OnBoarding />
      <Advisory />
      <WhyQuantree />
      </Body>
    </Fragment>
  );
};

export default HowItWorks;
