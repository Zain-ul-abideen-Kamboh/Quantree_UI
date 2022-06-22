import React, {Fragment} from "react";
import InvestmentHead from "../../componenets/Investment/InvestmentHead";
import InvestmentConfusion from "../../componenets/Investment/InvestmentConfusion";
import InvestmentMoney from "../../componenets/Investment/InvestmentMoney";
import InvestmentWay from "../../componenets/Investment/InvestmentWay";
import InvestmentQuantree from "../../componenets/Investment/InvestmentQuantree";
import AMCPartner from "../../componenets/Investment/Partners/AMCPartner";
import PrimaryPartner from "../../componenets/Investment/Partners/PrimaryPartner";
import Body from "../../layouts/Body";

const Investment = () => {
  return (
    <Fragment>
      <Body>
      <InvestmentHead />
      <InvestmentConfusion />
      <InvestmentMoney />
      <InvestmentWay />
      <InvestmentQuantree />
      <PrimaryPartner />
      <AMCPartner />
      </Body>
    </Fragment>
  );
};

export default Investment;
