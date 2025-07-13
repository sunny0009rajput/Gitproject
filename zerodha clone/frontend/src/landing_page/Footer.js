import React from 'react';
function Footer() {
    return ( 
        <div className='continer p-3 border-top ' style={{backgroundColor:"rgb(240, 240, 240"}}>
            <div className='row mb-1'>
                <div className='col'>
                    <img src='media/images/logo.svg' style={{width:"50%"}} />
                    <p>
                        &copy; 2010-2024, Not Zerodha Broking Ltd.<br/> All rights reserved.
                    </p>
                </div>
                <div className='col'>
                    <p>Company</p>
                    <a className='textcolor' href=''>About</a><br/>
                    <a className='textcolor' href=''>Products</a><br/>
                    <a className='textcolor' href=''>pricing</a><br/>
                    <a className='textcolor' href=''>Referal programme</a><br/>
                    <a className='textcolor' href=''>Careers</a><br/>
                    <a className='textcolor' href=''>Zerodha.tech</a><br/>
                    <a className='textcolor' href=''>press & media</a><br/>
                    <a className='textcolor' href=''>Zerodha cares (CSR)</a><br/>
                </div>
                <div className='col'>
                    <p>Support</p>
                    <a className='textcolor' href=''>Contact</a><br/>
                    <a className='textcolor' href=''>Support portal</a><br/>
                    <a className='textcolor' href=''>Z-connect blog</a><br/>
                    <a className='textcolor' href=''>List of charges</a><br/>
                    <a className='textcolor' href=''>Downloads & Resources</a><br/>

                </div>
                    
                <div className='col'>
                    <p>Account</p>
                    <a className='textcolor' href=''>Open an account</a><br/>
                    <a className='textcolor' href=''>Fund transfer</a><br/>
                    <a className='textcolor' href=''>60 days challenge</a><br/>
                    
                    
                </div>
            
        </div>
            <p className='text-muted footertextsize'>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

            <p className='text-muted footertextsize'>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
            <p className='text-muted footertextsize'>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
            <p className='text-muted footertextsize'>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
            <p className='text-muted footertextsize'>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
            <div style={{display:"flex", justifyContent:"space-evenly"}}>
                <a  className='textcolor text-muted' href=''>NSE</a>
                <a className='textcolor text-muted' href=''>BSE</a>
                <a className='textcolor text-muted' href=''>MCX</a>
                <a className='textcolor text-muted' href=''>Terms & Conditions</a>
                <a className='textcolor text-muted' href=''>Policies & Procedures</a>
                <a className='textcolor text-muted' href=''>Privacy</a>
                <a className='textcolor text-muted' href=''>Disclosure</a>
                
            </div>

        </div>
    );
}

export default Footer;