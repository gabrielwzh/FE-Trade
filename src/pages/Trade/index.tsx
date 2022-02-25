import React from "react";
import Navbar from "../../components/Navbar";
import { Wrapper, Subcontainer } from "../../components/CardBody.styles";
import Chart from "../../components/Chart";

function Trade() {
  return (
    <Wrapper>
      <Navbar />
      <Subcontainer>
        <Chart />
      </Subcontainer>
    </Wrapper>
  );
}

export default Trade;
