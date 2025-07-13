import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="text-center mt-5 mb-5 text-muted">
        <h1>Charges</h1>
        <h4>List of all charges and taxes</h4>
      </div>
      <div className="row mt-5">
        <div className="col-4 text-center">
          <img src="media/images/pricingEquity.svg" />
          <h1 className="text-muted">Free equity delivery</h1>
          <p className="text-muted">All equity delivery investments (NSE, BSE), are absolutely free - ₹ 0 brokerage.</p>
        </div>
        <div className="col-4 text-center">
          <img src="media/images/intradayTrades.svg" />
          <h1 className="text-muted">Intraday and F&O trades</h1>
          <p className="text-muted">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className="col-4 text-center">
          <img src="media/images/pricingEquity.svg" />
          <h1 className="text-muted">Free direct MF</h1>
          <p className="text-muted">All direct mutual fund investments are absolutely free - ₹ 0 commissions & DP charges.</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
