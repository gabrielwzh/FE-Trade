import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Dropdown, DropdownButton } from "react-bootstrap";

const Container = styled.div`
  z-index: 2;
  background: #343a40;
  color: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

const TitleContainer = styled.div`
  flex-grow: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const DropboxContainer = styled.div`
  margin-right: 30px;
  width: 80px;
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: 18px;
  padding: 20px;
`;

const Navbar = () => {
  const [currency, setCurrency] = useState("SGD");

  const handleSelect = (e: any) => {
    setCurrency(e);
  };

  return (
    <Container>
      <TitleContainer>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/Trade">Trade</CustomLink>
        <CustomLink to="/Account">Account</CustomLink>
        <CustomLink to="/Wallet">Wallet</CustomLink>
      </TitleContainer>
      <DropboxContainer>
        <DropdownButton
          variant="outline-secondary"
          title={currency}
          id="input-group-dropdown-1"
          onSelect={handleSelect}
        >
          <Dropdown.Item eventKey="SGD">SGD</Dropdown.Item>
          <Dropdown.Item eventKey="USD">USD</Dropdown.Item>
          <Dropdown.Item eventKey="CNY">CNY</Dropdown.Item>
          <Dropdown.Item eventKey="INR">INR</Dropdown.Item>
        </DropdownButton>
      </DropboxContainer>
    </Container>
  );
};

export default Navbar;
