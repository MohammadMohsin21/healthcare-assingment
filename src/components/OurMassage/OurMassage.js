import React from 'react';
import './OurMassage.css';
import banner from '../../images/banner.jpg';

const OurMassage = () => {
    return (
        <div className='massage'>
            <h3 className='our-massage'>Enjoy a Healty Life</h3>
            <img src={banner} alt="" />
        </div>
    );
};

export default OurMassage;