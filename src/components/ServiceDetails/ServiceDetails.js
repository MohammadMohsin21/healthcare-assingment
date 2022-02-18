import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceKey} = useParams();
    const [service, setService] = useState({});

    useEffect( () => {
        const url = `./services.json/service/${serviceKey}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setService(data))
    }, []);
    return (
        <div className='mt-5'>
            {/* <h1> ServiceKey {serviceKey}</h1> */}
            <div className='services'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={service.img} />
                <Card.Body>
                    <Card.Title>{service.name}</Card.Title>
                    <Card.Text>
                    <p>{service.details}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
        </div>
    );
};

export default ServiceDetails;