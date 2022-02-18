import React from 'react';
import './ServiceCart.css';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ServiceCart = (props) => {
    const { name, img, details, key } = props.service;
    return (
        <div className='services'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                    <p>{details}</p>
                    </Card.Text>
                    <Link to={`/servicedetails/${key}`}><Button variant="primary">Read More</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ServiceCart;