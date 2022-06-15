import React, { lazy, Suspense } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// import store from "./data/store";

const Home = lazy(() => import("./pages/Home"));
const Trade = lazy(() => import("./pages/Trade"));
const Account = lazy(() => import("./pages/Account"));
const Wallet = lazy(() => import("./pages/Wallet"));

function Providers() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trade" element={<Trade />} />
          <Route path="/account" element={<Account />} />
          <Route path="/wallet" element={<Wallet />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default Providers;
