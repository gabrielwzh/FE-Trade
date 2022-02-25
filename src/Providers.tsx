import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Provider } from "react-redux";
import Home from "./pages/Home";
import Trade from "./pages/Trade";
import Account from "./pages/Account";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// import store from "./data/store";

function Providers() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trade" element={<Trade />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Router>
  );
}

export default Providers;
