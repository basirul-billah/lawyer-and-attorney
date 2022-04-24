import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Register = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [error, setError] = useState();
    const navigate = useNavigate();

    // react firebase hook 
    const [ createUserWithEmailAndPassword, user ] = useCreateUserWithEmailAndPassword(auth);

    if(user) {
        navigate('/home');
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords does not match!')
        }
        else if (password.length < 8) {
            setError('Password length cannot be less than 8 character.')
        }
        else {
            createUserWithEmailAndPassword(email, password);
            return;
        }
    }
    return (
        <div>
            <Card className='mx-auto my-4' style={{ width: '30rem' }}>
                <Card.Header as="h5">Create a new account</Card.Header>
                <Card.Body>
                    <Form onSubmit={handleFormSubmit}>
                        {/* email */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                onBlur={e => setEmail(e.target.value)}
                                type="email"
                                placeholder="Enter email" />
                        </Form.Group>

                        {/* password */}
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                onBlur={e => setPassword(e.target.value)}
                                type="password"
                                placeholder="Password" />
                        </Form.Group>

                        {/* confirm password */}
                        <Form.Group className="mb-3" controlId="confirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                onBlur={e => setConfirmPassword(e.target.value)}
                                type="password"
                                placeholder="Confirm Password" />
                        </Form.Group>

                        <Form.Group>
                            <p className='text-danger'>{error}</p>
                        </Form.Group>

                        {/* submit */}
                        <Button variant="dark" type="submit">
                            Sign up
                        </Button>
                    </Form>
                    <div>
                        <div className='d-flex align-items-center'>
                            <div style={{ height: '1px' }} className='bg-primary w-50 m-2'></div>
                            <p className='mt-2'>or</p>
                            <div style={{ height: '1px' }} className='bg-primary w-50 m-2'></div>
                        </div>
                        <div className='mb-4'>
                            <Button variant="dark">Register using Google</Button>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Register;