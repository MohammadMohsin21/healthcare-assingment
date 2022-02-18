import React from 'react';
import './Register.css';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <Form onSubmit="" className="from">
                    <Form.Label>Create an Account</Form.Label>
                        <Form.Control type="name" name="name"  placeholder="First name" required/><br/>
                        <Form.Control  type="name" name="lastName" placeholder="Last name" required/><br/>
                        <Form.Group controlId="formGroupEmail">
                        <Form.Control type="email" name="email"  placeholder="Enter email" required/><br/>
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Control type="password" name="password" placeholder="Password" required/><br/>
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                         <Form.Control type="password" name="confarmPassword" placeholder="Confirm Password" required/><br/>
                        <div className="d-flex justify-content-between">
                        <Form.Check type="checkbox" label="Remember Me" />
                        <Link variant="link" >Forgot Password</Link></div>
                        <button onClick="" className="btn btn-success button">Create an account</button>
                    </Form.Group> <br />
                    <div className='create-accout'>            
                        <h6>Already have an account ?</h6>
                        <label htmlFor="newUser"><Link to="/login">Login your account</Link></label>
                    </div>
            </Form>
        </div>
    );
};

export default Register;