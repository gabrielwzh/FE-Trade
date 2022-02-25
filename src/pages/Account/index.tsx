import React from "react";
import Navbar from "../../components/Navbar";
import { Wrapper, Subcontainer } from "../../components/CardBody.styles";

function Account() {
  return (
    <>
      <Wrapper>
        <Navbar />
        <Subcontainer data-testid="subcontainer">Account page</Subcontainer>
      </Wrapper>
    </>
  );
}

export default Account;
