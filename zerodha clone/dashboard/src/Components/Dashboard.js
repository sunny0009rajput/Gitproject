import React from "react";
import { Route, Routes } from "react-router-dom";

import Apps from "./App.js";
import Funds from "./Fund.js";
import Holdings from "./Holding.js";
import Orders from "./Order.js";
import WatchList from "./WatchList.js";
import Summary from "./Summary.js";
import Positions from "./Positions.js";
import { GeneralContextProvider } from "./GeneralContext.js";


const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;