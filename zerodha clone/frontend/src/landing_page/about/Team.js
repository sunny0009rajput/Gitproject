import React from 'react';

function Team() {
    return ( 
        <div className="container border-top">
      <div className="row p-5 mb-5">
        <h1 className="text-center">
          People
          
        </h1>
      </div>

      <div className="row p-5 mt-5  text-muted fs-5" style={{lineHeight: "1.8", fontSize:"1.2em"}}>
        <div className="col-6 text-cener">
            <img src='media/images/nithinKamath.jpg' style={{borderRadius: "100%", width:"60%"}}/>
            <h4 className="text-center mt-3" style={{width:"350px"}}>Nithin Kamath</h4>
            <h6 className="text-center" style={{width:"350px"}}>Founder, CEO</h6>
        </div>
        <div className="col-6">
            <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
            <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
            <p>Playing basketball is his zen.</p>
            <p>Connect on <a href=''>Homepage</a> /<a href=''>TradingQnA</a>  / <a href=''>Twitter</a> </p>
        </div>
      </div>
    </div>
     );
}

export default Team;