import React from 'react';

function CreateTicket() {
    return ( 
        <div className='container p-3 mt-5'>
            
            <h5 className='text-muted'>To crate a ticket, select a relevent topic</h5>
            
            <div className='row'>
                <div className='col-4'>
                    <a className='fs-4' style={{color:"black"}} href=''> <i class="fa-solid fa-circle-plus"></i> Account Opening</a>
                    <ul>
                        
                        <li className='mb-2' style={{listStyleType:"none"}}><a href=''>Resident individual</a></li>
                        <li className='mb-2' style={{listStyleType:"none"}}><a href=''>Minor</a></li>
                        <li className='mb-2' style={{listStyleType:"none"}}><a href=''>Non Resident Indian (NRI)</a></li>
                        <li className='mb-2' style={{listStyleType:"none"}}><a href=''>Company, Partnership, HUF and LLP</a></li>
                        <li className='mb-2' style={{listStyleType:"none"}}>  <a href=''>Glossary</a></li>
                    </ul>


                    
                    
                    
                    
                    
                   
                </div>
                <div className='col-4'>
                    <a className='fs-4' style={{color:"black"}} href=''> <i class="fa-solid fa-user"></i> Your Zerodha Account</a>
                    <ul>
                        
                        <li className='mb-2' style={{listStyleType:"none"}}><a href=''>Your Profile</a></li>
                        <li className='mb-2' style={{listStyleType:"none"}}><a href=''>Account modification</a></li>
                        <li className='mb-2' style={{listStyleType:"none"}}><a href=''>Client Master Report (CMR) and Depository participant (DP)</a></li>
                        <li className='mb-2' style={{listStyleType:"none"}}><a href=''>Nomination</a></li>
                        <li className='mb-2' style={{listStyleType:"none"}}>  <a href=''>Transfer and conversion of securities</a></li>
                    </ul>
                </div>
                <div className='col-4'>
                    <a className='fs-4' style={{color:"black"}} href=''> <i class="fa-solid fa-grip-lines-vertical"></i> Kite</a>
                    <ul>
                        
                        <li className='mb-2' style={{listStyleType:"none"}}><a href=''>IPO</a></li>
                        <li className='mb-2' style={{listStyleType:"none"}}><a href=''>Trading FAQs</a></li>
                        <li className='mb-2' style={{listStyleType:"none"}}><a href=''>Margin Trading Facility and Margins</a></li>
                        <li className='mb-2' style={{listStyleType:"none"}}><a href=''>Charts and orders</a></li>
                        <li className='mb-2' style={{listStyleType:"none"}}>  <a href=''>Alerts and Nudges</a></li>
                        <li className='mb-2' style={{listStyleType:"none"}}>  <a href=''>General</a></li>
                    </ul>
                </div>
            </div>

            <div className='row'>
                <div className='col-4'>
                    <a className='fs-4' style={{color:"black"}} href=''> <i class="fa-solid fa-credit-card"></i> Funds</a>
                    
                    <ul>
                        
                        <li className='mb-2' style={{listStyleType:"none"}}><a href=''>Add money</a></li>
                        <li className='mb-2' style={{listStyleType:"none"}}><a href=''>Withdraw money</a></li>
                        <li className='mb-2' style={{listStyleType:"none"}}><a href=''>Add bank accounts</a></li>
                        <li className='mb-2' style={{listStyleType:"none"}}><a href=''>eMandates</a></li>
                        
                    </ul>


                    
                    
                    
                    
                    
                   
                </div>
                <div className='col-4'>
                    <a className='fs-4' style={{color:"black"}} href=''> <i class="fa-solid fa-terminal"></i> Console</a>
                    <ul>
                        
                        <li className='mb-2' style={{listStyleType:"none"}}><a href=''>Portfolio</a></li>
                        <li className='mb-2' style={{listStyleType:"none"}}><a href=''>Corporate actions</a></li>
                        <li className='mb-2' style={{listStyleType:"none"}}><a href=''>Funds statement</a></li>
                        <li className='mb-2' style={{listStyleType:"none"}}><a href=''>Reports</a></li>
                        <li className='mb-2' style={{listStyleType:"none"}}>  <a href=''>Profile</a></li>
                        <li className='mb-2' style={{listStyleType:"none"}}>  <a href=''>Segments</a></li>
                    </ul>
                </div>
                <div className='col-4'>
                    <a className='fs-4' style={{color:"black"}} href=''> <i class="fa-solid fa-coins"></i> Coin</a>
                    <ul>
                        
                        <li className='mb-2' style={{listStyleType:"none"}}><a href=''>Mutual Funds</a></li>
                        <li className='mb-2' style={{listStyleType:"none"}}><a href=''>National Pension Scheme (NPS)</a></li>
                        <li className='mb-2' style={{listStyleType:"none"}}><a href=''>Fixed Deposit (FD)</a></li>
                        <li className='mb-2' style={{listStyleType:"none"}}><a href=''>Features on Coin</a></li>
                        <li className='mb-2' style={{listStyleType:"none"}}>  <a href=''>Payments and Orders</a></li>
                        <li className='mb-2' style={{listStyleType:"none"}}>  <a href=''>General</a></li>
                    </ul>
                </div>
            </div>

            
        </div>
     );
}

export default CreateTicket;