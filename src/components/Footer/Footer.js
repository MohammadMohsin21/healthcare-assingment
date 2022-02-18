import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='container footer'>
                <div className='footer-section'>
                    <div className='footer-div'>
                        <h1 className='logo'><span className='green-text'>GREEN</span>Medical</h1><br />
                        <p>We bring the years, global experience, and stamina to guide our clients through new and often disruptive realities.</p>
                    </div>
                    <div className='footer-div'>
                        <h3>Services</h3>
                        <p>Atherosclerosis</p>
                        <p>Heart infections</p>
                        <p>Cardiomyopathy</p>
                    </div>
                    <div className='footer-div'>
                        <h3>Pricing & Fees</h3>
                        <p>Compare Insurance Plans</p>
                        <p>Standard Plan - $499</p>
                        <p>Premium Plan - $999</p>
                        <p>Pro Plan - $1399</p>
                    </div>
                    <div className='footer-div'>
                        <h3>Contact</h3>
                        <p>Phone: 1-800-1-900</p>
                        <p>Email: info@cliniq.com</p>
                        <p>60 East 65th Street, New York</p>
                    </div>
                    </div> 
                    <div className='text-center mt-5'>
                        <p>©2021 CLINIQ. All rights reserved</p>
                    </div>   
        </div>
    );
};

export default Footer;