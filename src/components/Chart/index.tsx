import React, { useState } from "react";
// import Highcharts from "highcharts/highstock";
// import HighchartsReact from "highcharts-react-official";
import { ApexOptions } from "apexcharts";
import ApexCandleChart from "react-apexcharts";
import { Button, Nav } from "react-bootstrap";
import styled from "styled-components";

const Errorlbl = styled.span`
  color: #ff0000;
`;

function Chart() {
  let series = [
    {
      data: [
        {
          x: 0,
          y: [0, 0, 1, 1],
        },
        {
          x: 1,
          y: [1, 1, 5, 5],
        },
        {
          x: 2,
          y: [5, 5, 15, 15],
        },
        {
          x: 3,
          y: [15, 15, 35, 35],
        },
        {
          x: 4,
          y: [35, 35, 25, 25],
        },
        {
          x: 5,
          y: [25, 25, 10, 10],
        },
        {
          x: 6,
          y: [10, 10, 5, 5],
        },
        {
          x: 7,
          y: [5, 5, 25, 25],
        },
      ],
    },
  ];

  const options: ApexOptions = {
    chart: {
      height: 350,
    },
    title: {
      text: "Stock Chart",
      align: "center",
    },
    xaxis: {
      type: "numeric",
      decimalsInFloat: 0,
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
      title: {
        text: "TTT Quantity",
      },
    },
  };

  const [seriesData, setSeriesData] = useState(series);
  const [inputQty, setInputQty] = useState("");
  const [avaiBalance, setAvaiBalance] = useState(75); //
  const [holdingQty, setHoldingQty] = useState(25); //
  const [stockPrice, setStockPrice] = useState(25); //
  const [count, setCount] = useState(7); //
  const [buyState, setBuyState] = useState(true);
  const [invalidValue, setInvalidValue] = useState(false);

  function handleBuy() {
    const sumCount = count + 1;
    let newPrice = stockPrice + Number(inputQty);

    setSeriesData((series) => {
      const newSeries = {
        x: sumCount,
        y: [stockPrice, stockPrice, newPrice, newPrice],
      };
      const result = [{ data: [...series[0].data, newSeries] }];
      return result;
    });
    setCount(sumCount);
    setStockPrice(newPrice);
    setAvaiBalance(avaiBalance - Number(inputQty));
    setHoldingQty(holdingQty + Number(inputQty));
    setInputQty("");
  }

  function handleSell() {
    const sumCount = count + 1;
    let newPrice = stockPrice - Number(inputQty);

    setSeriesData((series) => {
      const newSeries = {
        x: sumCount,
        y: [stockPrice, stockPrice, newPrice, newPrice],
      };
      const result = [{ data: [...series[0].data, newSeries] }];
      return result;
    });
    setCount(sumCount);
    setStockPrice(newPrice);
    setAvaiBalance(avaiBalance + Number(inputQty));
    setHoldingQty(holdingQty - Number(inputQty));
    setInputQty("");
  }

  function handleQty(e: any) {
    const value = e.target.value;
    const reg = /^[1-9][0-9]*$/;
    if (value === "" || reg.test(value)) {
      if (buyState && value <= avaiBalance) {
        setInvalidValue(false);
      } else if (!buyState && value <= holdingQty) {
        setInvalidValue(false);
      } else {
        setInvalidValue(true);
      }
    } else {
      setInvalidValue(true);
    }
    setInputQty(value);
  }

  return (
    <div>
      <ApexCandleChart options={options} series={seriesData} type="candlestick" height={350} />
      {/* <HighchartsReact highcharts={Highcharts} constructorType={"stockChart"} options={options} /> */}
      <div style={{ paddingLeft: "32px" }}>
        <Nav variant="pills" defaultActiveKey="buy">
          <Nav.Item>
            <Nav.Link eventKey="buy" onClick={() => setBuyState(true)}>
              Buy
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="sell" onClick={() => setBuyState(false)}>
              Sell
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <div>
          <input placeholder="Quantity" value={inputQty} onChange={handleQty}></input>
        </div>
        <div>
          <span>Avail Balance: {buyState ? avaiBalance : holdingQty}</span>
        </div>
        <div>
          {buyState ? (
            <Button
              variant="success"
              onClick={handleBuy}
              disabled={invalidValue || inputQty === ""}
            >
              Buy Now
            </Button>
          ) : (
            <Button
              variant="danger"
              onClick={handleSell}
              disabled={invalidValue || inputQty === ""}
            >
              Sell Now
            </Button>
          )}
        </div>
        {invalidValue && <Errorlbl>Please enter a valid number</Errorlbl>}
      </div>
    </div>
  );
}

export default Chart;
