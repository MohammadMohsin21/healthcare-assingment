import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Doctors.css';
import doctor1 from '../../images/doctor 01.jpg';
import doctor2 from '../../images/doctor 02.jpg';
import doctor3 from '../../images/doctor 03.jpg';

const Doctors = () => {
    return (
        <div className='container doctors-section'>
            <br />
            <h2 className='text-center'>Our Best Doctors</h2>
            <CardGroup className='doctors'>
            <Card className='doctor' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={doctor1} />
                <Card.Body className='text-center'>
                <Card.Text>
                       <p>SENIOR CARDIOLOGIST</p>
                    </Card.Text>
                    <Card.Title>Dr Vinay Kumar</Card.Title>
                </Card.Body>
            </Card>
            <Card className='doctor' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={doctor2} />
                <Card.Body className='text-center'>
                <Card.Text>
                       <p>CARDIOLOGIST</p>
                    </Card.Text>
                    <Card.Title>Dr Helen J. Curry</Card.Title>
                </Card.Body>
            </Card>
            <Card className='doctor' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={doctor3} />
                <Card.Body className='text-center'>
                <Card.Text>
                       <p>CARDIOLOGIST</p>
                    </Card.Text>
                    <Card.Title>Dr Vitór Santos</Card.Title>
                </Card.Body>
            </Card>
            </CardGroup>
        </div>
    );
};

export default Doctors;