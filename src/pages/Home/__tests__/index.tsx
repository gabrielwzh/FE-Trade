import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../index";
import { BrowserRouter as Router } from "react-router-dom";

describe("Home page unit tests", () => {
  render(
    <Router>
      <Home />
    </Router>
  );

  it("should show body content", () => {
    const body = screen.getByTestId("subcontainer");
    expect(body).toBeInTheDocument();
    expect(body).toHaveTextContent("Home page");
  });
});
