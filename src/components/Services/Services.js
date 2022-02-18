import React, { useEffect, useState } from 'react';
import './Services.css';
import { CardGroup } from 'react-bootstrap';
import ServiceCart from '../ServiceCart/ServiceCart';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect( () =>{
        fetch('./services.json')
        .then(res => res.json())
        .then(data => setServices(data))

    }, [])


    return (
        <div className='container service-section'>
            <h2 className='text-center mt-5'>Our Best Services</h2><br />
            <CardGroup>
                {
                    services.map(service => <ServiceCart service={service}></ServiceCart>)
                }
            </CardGroup>
        </div>
    );
};

export default Services;