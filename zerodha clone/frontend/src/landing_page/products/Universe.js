import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row text-center mt-5 mb-5">
        <h5 className="text-muted mb-5 mt-5">
          Want to know more about our technology stack? Check out the
          <a href="">Zerodha.tech</a> blog.
        </h5>
        <h1 className="mt-5">The Zerodha Universe</h1>
        <h6 className="text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </h6>
        <p className="text-muted">
          Check out our <a href="">investment offerings →</a>{" "}
        </p>
      </div>
      <div className="row text-muted text-center">
        <div className="col p-3">
          <img
            src="media/images/zerodhaFundhouse.png"
            style={{ width: "200px", height: "50px" }}
          />
          <p className="prafontsize">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col p-3">
          <img
            src="media/images/sensibullLogo.svg"
            style={{ width: "200px", height: "50px" }}
          />
          <p className="prafontsize">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col p-3">
          <img
            src="media/images/streakLogo.png"
            style={{ width: "200px", height: "50px" }}
          />
          <p className="prafontsize">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
      </div>

      <div className="row mt-3 text-muted text-center">
        <div className="col p-3">
          <img
            src="media/images/smallcaseLogo.png"
            style={{ width: "200px", height: "50px" }}
          />
          <p className="prafontsize">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col p-3">
          <img
            src="media/images/goldenpiLogo.png"
            style={{ width: "200px", height: "50px" }}
          />
          <p className="prafontsize">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <div className="col p-3">
          <img
            src="media/images/dittoLogo.png"
            style={{ width: "200px", height: "50px" }}
          />
          <p className="prafontsize">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
      </div>

    <div className='row text-center mb-5 mt-5'>
                
                
                <div class="d-grid gap-2 col-3 mx-auto">
                  <button type='button' className='btn btn-primary fs-5 p-2 ' >Sign up for free</button>
                </div>
            </div>

    </div>
  );
}

export default Universe;
