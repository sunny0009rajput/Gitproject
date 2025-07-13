import React from 'react';

function Hero() {
    return ( 
        <div className='bg-primary'>
        <div className='container p-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <h5>Support Portal</h5>
                </div>
                <div className='col-6 p-5'>
                    <h6 className='text-end p-5 mx-5'>Track Tickets</h6>
                </div>
            </div>
            <div className='row'>
                <div className='col-6 p-5'>
                    <h4>Search for an answer or browse help topics to create a ticket</h4>
                    <input style={{width:"500px", height:"50px", borderRadius:"7px"}} type='text' placeholder='Eg. how do i activate F&O, why is my order getting rejected..'/>
                    <div style={{ textAlign:"start", color:"white"}}>
                        <a className='mx-2' href='' style={{color:"black"}}>Track account opening</a>
                        <a href='' className='mx-2' style={{color:"black", width:"200px"}}>Track segment activation</a>
                        <a href='' className='mx-2' style={{color:"black"}}>Intraday</a>
                        <a href='' className='mx-2' style={{color:"black"}}>margins</a>
                        <a href='' className='mx-2' style={{color:"black"}}>Kite user manual</a>
                    </div>
                </div>
                <div className='col-6 p-5'>
                    <h4>Featured</h4>
                    <ol>
                        <li>Current takeovers and delisting - january2024</li>
                        <li>Latest intraday leverages -MIS & CO</li>
                    </ol>
                </div>
            </div>
        </div>
        </div>
     );
}

export default Hero;