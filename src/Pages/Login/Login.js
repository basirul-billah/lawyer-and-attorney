import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from '../Components/SocialLogin/SocialLogin';
import auth from '../../firebase.init';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [
        signInWithEmailAndPassword,
        user,
        error,
        loading
    ] = useSignInWithEmailAndPassword(auth);

    const navigateRegister = () => {
        navigate('/register');
    }

    const onEmailBlur = e => {
        setEmail(e.target.value);
    }

    const onPasswordBlur = e => {
        setPassword(e.target.value);
    }

    const handleLogin = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    if(user) {
        navigate('/home');
    }

    return (
        <div>
            <Card className='mx-auto my-4' style={{ width: '30rem' }}>
                <Card.Header as="h5">Sign in to your account</Card.Header>
                <Card.Body>
                    <Form onSubmit={handleLogin}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                onBlur={onEmailBlur} 
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                onBlur={onPasswordBlur} 
                            />
                        </Form.Group>
                        <p className='text-danger'>{error?.message}</p>
                        {
                            loading && <p>Loading...</p>
                        }
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