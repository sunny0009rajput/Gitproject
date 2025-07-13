import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 p-5">
          <img src={imageURL} />
        </div>
        <div className="col-6 p-5" style={{marginTop:"60px"}}>
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div className="p-2">
          <a href={tryDemo}>
            {tryDemo}<i class="fa-solid fa-arrow-right"></i>
          </a>
          <a href={learnMore} style={{ marginLeft: "50px" }}>
            {learnMore} <i class="fa-solid fa-arrow-right"></i>
          </a>
          </div>
          <div className="p-2">
            <a href={googlePlay}>
              
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore} style={{ marginLeft: "50px" }}>
              
              <img src="media/images/appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
