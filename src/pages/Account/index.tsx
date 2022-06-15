import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { Wrapper, Subcontainer } from "../../components/CardBody.styles";
// import axios from "axios";
import { Dropdown, DropdownButton, Button } from "react-bootstrap";
import styled from "styled-components";
// import balance from "../../data/account.json";

interface exchangeRateModel {
  baseCurrency: string;
  rates: { SGD: number; USD: number; EUR: number };
}

const balance = {
  USD: 0,
  SGD: 1000,
  EUR: 0,
};

const exchangeRate: exchangeRateModel[] = [
  {
    baseCurrency: "SGD",
    rates: { SGD: 1, USD: 0.7301, EUR: 0.6804 },
  },
  {
    baseCurrency: "USD",
    rates: { SGD: 1.3698, USD: 1, EUR: 0.9321 },
  },
  {
    baseCurrency: "EUR",
    rates: { EUR: 1, SGD: 1.4696, USD: 1.0729 },
  },
];

const DropboxContainer = styled.div`
  width: 75px;
  background: #343a40;
  margin: 3px;
`;

const LayoutComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

const Errorlbl = styled.span`
  color: #ff0000;
`;

function Account() {
  const handleRates = (baseFrom: string, baseTo?: string) => {
    const result = exchangeRate.filter((item) => {
      return item.baseCurrency === baseFrom;
    })[0].rates;
    if (result)
      return result[baseTo ? (baseTo as keyof typeof result) : (currencyTo as keyof typeof result)];
    else return 1;
  };

  const [currencyFrom, setCurrencyFrom] = useState("SGD");
  const [currencyTo, setCurrencyTo] = useState("USD");
  const [inputExchangeAmt, setInputExchangeAmt] = useState("");
  const [returnExchangeAmt, setReturnExchangeAmt] = useState(0);
  const [Erates, setERates] = useState(handleRates(currencyFrom));
  const [invalidValue, setInvalidValue] = useState(true);
  const [amount, setAmount] = useState(balance);

  const handleSelectFrom = (e: any) => {
    if (e === currencyTo) {
      setCurrencyTo(currencyFrom);
      setERates(handleRates(currencyTo, currencyFrom));
    } else {
      setERates(handleRates(e));
    }
    setCurrencyFrom(e);
  };

  const handleSelectTo = (e: any) => {
    if (e === currencyFrom) {
      setCurrencyFrom(currencyTo);
      setERates(handleRates(currencyTo, currencyFrom));
    } else {
      setERates(handleRates(currencyFrom, e));
    }
    setCurrencyTo(e);
  };

  const handleCurrencyInput = (e: any) => {
    const value = e.target.value;
    const reg = /^[1-9][0-9]*$/;
    if (value === "" || reg.test(value)) {
      setInputExchangeAmt(value);
      setReturnExchangeAmt(Number((Erates * value).toFixed(2)));
      if (amount[currencyFrom as keyof typeof amount] >= value && value > 0) {
        setInvalidValue(false);
      } else {
        setInvalidValue(true);
      }
    }
  };

  const handleExchange = () => {
    amount[currencyFrom as keyof typeof amount] =
      amount[currencyFrom as keyof typeof amount] - Number(inputExchangeAmt);
    amount[currencyTo as keyof typeof amount] =
      amount[currencyTo as keyof typeof amount] + returnExchangeAmt;
    setAmount({ ...amount });
    setInputExchangeAmt("");
    setReturnExchangeAmt(0);
    setInvalidValue(true);
    window.alert("Success!");
  };

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const data = await axios.get("https://api.exchangeratesapi.io/latest");
    ////url, body, headers: { 'Content-Type': 'application/json'}
    //     //setRatesList(data);
    //     console.log(data);
    //   } catch (e) {
    //     console.log(e);
    //   }
    // };
    // fetchData();
  }, []);
  return (
    <>
      <Wrapper>
        <Navbar />
        <Subcontainer data-testid="subcontainer">
          <LayoutComponent>
            <div>
              <div>Balance</div>
              <div>SGD: {amount.SGD.toFixed(2)}</div>
              <div>USD: {amount.USD.toFixed(2)}</div>
              <div>EUR: {amount.EUR.toFixed(2)}</div>
            </div>
          </LayoutComponent>

          <LayoutComponent>
            <DropboxContainer>
              <DropdownButton
                variant="outline-secondary"
                title={currencyFrom}
                id="input-group-dropdown-1"
                onSelect={handleSelectFrom}
              >
                <Dropdown.Item eventKey="SGD">SGD</Dropdown.Item>
                <Dropdown.Item eventKey="USD">USD</Dropdown.Item>
                <Dropdown.Item eventKey="EUR">EUR</Dropdown.Item>
              </DropdownButton>
            </DropboxContainer>
            <input
              placeholder="Enter Amount"
              value={inputExchangeAmt}
              onChange={handleCurrencyInput}
            ></input>
          </LayoutComponent>

          <LayoutComponent>
            EXCHANGE RATE: 1 {currencyFrom} to {Erates} {currencyTo}
          </LayoutComponent>

          <LayoutComponent>
            <DropboxContainer>
              <DropdownButton
                variant="outline-secondary"
                title={currencyTo}
                id="input-group-dropdown-1"
                onSelect={handleSelectTo}
              >
                <Dropdown.Item eventKey="SGD">SGD</Dropdown.Item>
                <Dropdown.Item eventKey="USD">USD</Dropdown.Item>
                <Dropdown.Item eventKey="EUR">EUR</Dropdown.Item>
              </DropdownButton>
            </DropboxContainer>
            <input value={returnExchangeAmt} disabled></input>
          </LayoutComponent>

          <LayoutComponent>
            <Button variant="success" disabled={invalidValue} onClick={handleExchange}>
              Exchange
            </Button>
          </LayoutComponent>
          <LayoutComponent>
            {invalidValue && inputExchangeAmt && (
              <Errorlbl>Please enter a sufficient amount</Errorlbl>
            )}
          </LayoutComponent>
        </Subcontainer>
      </Wrapper>
    </>
  );
}

export default Account;
