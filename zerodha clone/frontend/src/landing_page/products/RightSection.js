import React from 'react';

function RightSection({
    imageURL,
  productName,
  productDescription,
  
  learnMore,
  
}) {
    return ( 
        <div className="container">
      <div className="row">
        <div className="col-6 p-5" style={{marginTop:"150px"}}>
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div className="p-2">
          
          <a href={learnMore}>
            {learnMore}
            <i class="fa-solid fa-arrow-right"></i>
          </a>
          </div>
          
        </div>
        <div className="col-6 p-5">
          <img src={imageURL} />
        </div>
        
      </div>
    </div>
     );
}

export default RightSection;