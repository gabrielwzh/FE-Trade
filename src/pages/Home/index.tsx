import React from "react";
import Navbar from "../../components/Navbar";
import { Wrapper, Subcontainer } from "../../components/CardBody.styles";

function Home() {
  return (
    <Wrapper>
      <Navbar />
      <Subcontainer data-testid="subcontainer">Home page</Subcontainer>
    </Wrapper>
  );
}

export default Home;
