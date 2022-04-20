import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';

const Register = () => {
    return (
        <div>
            <Card className='mx-auto my-4' style={{ width: '30rem' }}>
                <Card.Header as="h5">Create a new account</Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" />
                        </Form.Group>
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