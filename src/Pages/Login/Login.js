import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../Components/SocialLogin/SocialLogin';

const Login = () => {
    const navigate = useNavigate();

    const navigateRegister = () => {
        navigate('/register');
    }
    return (
        <div>
            <Card className='mx-auto my-4' style={{ width: '30rem' }}>
                <Card.Header as="h5">Sign in to your account</Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="dark" type="submit">
                            Log in
                        </Button>
                    </Form>
                    <p>New to Lawyer & Attorney?
                        <Link
                            to='/register'
                            className='text-danger ps-1 text-decoration-none'
                            onClick={navigateRegister}>
                            Register now!
                        </Link>
                    </p>
                </Card.Body>
                <SocialLogin></SocialLogin>
            </Card>


        </div>
    );
};

export default Login;