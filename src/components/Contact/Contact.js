import React from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';

const Contact = () => {
    return (
        <div>
                <div className="row mt-5">
                <div className="col-md-4 m-5 p-5">
                <h2 className="display-4">Contact Us</h2>   
                <p style={{color: 'black'}}>Medicine is the science and practice of caring for a patient, managing the diagnosis, prognosis, prevention, treatment, palliation of their injury  and restore health or illness. Contemporary medicine applies biomedical sciences, biomedical research, genetics, and medical technology to diagnose, treat, ands, and ionizing radiation, amongst others.</p> 
                </div>
                <div className="col-md-6">
                    <Card className="m-5 p-5">
                        <Form>
                            <Form.Group>
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text"/>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text"/>
                                <Row>
                                    <Col>
                                        <Form.Label>Time</Form.Label>
                                        <Form.Control type="time"/>
                                    </Col>
                                    <Col>
                                        <Form.Label>Date</Form.Label>
                                        <Form.Control type="date"/>
                                    </Col>
                                </Row>
                            </Form.Group> <br />
                            <Button variant="warning" >Submit</Button>
                        </Form>
                    </Card>
                </div>
            </div>
    </div>
    );
};

export default Contact;