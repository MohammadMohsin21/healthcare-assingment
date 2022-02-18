import React from 'react';
import errorpage from '../../images/error-page.gif';
import './NotFound.css';
const NotFound = () => {
    return (
        <div className='error-page'>
            <img src={errorpage} alt="" />
            <div className='error-massage'>
                <h1>404</h1>
            </div>
        </div>
    );
};

export default NotFound;