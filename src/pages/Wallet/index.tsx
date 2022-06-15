import React from "react";
import Navbar from "../../components/Navbar";
import { Wrapper, Subcontainer } from "../../components/CardBody.styles";

function Wallet() {
  function handleConnectWallet() {
    console.log("handle connect");
  }

  return (
    <Wrapper>
      <Navbar />
      <Subcontainer>
        <div>Web 3.0</div>
        <button onClick={handleConnectWallet}>Connect wallet</button>
      </Subcontainer>
    </Wrapper>
  );
}

export default Wallet;
