import React from 'react';
import './Login.css';
import { Form } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import { Link, useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import google from '../../images/google-icon.png';
import github from '../../images/github-icon.png';

const Login = () => {
    const { singInUsingGoogle, singInUsingGithub } = useAuth();
    const location = useLocation();
    const redirect_uri = location.state?.from ||  './home';
    const history = useHistory();

    const handleGoogleLogin = () => {
        singInUsingGoogle()
        .then(result => {
                history.push(redirect_uri);
        })
    }
    const handleGithubLogin = () => {
        singInUsingGithub()
        .then(result => {
                history.push(redirect_uri);
        })
    }

    return (
        <div className='login-container'>
            <Form  className="from">
                    <Form.Label>Login  Account</Form.Label>
                        <Form.Group controlId="formGroupEmail">
                        <Form.Control type="email" name="email"  placeholder="Enter email"  />
                    </Form.Group><br/>
                    <Form.Group >
                        <Form.Control type="password" name="password" placeholder="Password"  />
                    </Form.Group>
                    <Form.Group >
                        <div className="d-flex justify-content-between">
                        <Form.Check type="checkbox" label="Remember Me" /> 
                        <Link variant="link" >Forgot Password</Link></div>
                        <button className="btn btn-success button">Login</button>
                    </Form.Group> <br/>
                    <div className='create-accout'>            
                        <h6>Don't have an account ?</h6>
                        <label htmlFor="newUser"><Link to="/register">Create an account</Link></label>
                    </div>
            </Form>
                <div className="optonal-button">
                    <h5>---------------- or ----------------</h5>
                    <button className="icon-button"  onClick={handleGoogleLogin}><img src="" className="icon" alt=""/><img src={google} className="icon" alt=""/>Continue with Google</button><br/><br/>
                    <button className="icon-button" onClick={handleGithubLogin}><img src={github} className="icon" alt=""/> Continue with GitHub</button> 
                </div>
        </div>
    );
};

export default Login;