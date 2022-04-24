import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, img, title, description, price } = service;
    const navigate = useNavigate();
    const navigateToCheckout = id => {
        navigate(`/services/${id}`);
    }
    return (
        <div className='col-12 col-lg-3 d-flex justify-content-center m-2'>
            <Card style={{ width: '18rem', height: '24rem' }}>
                <Card.Img style={{ height: '9rem' }} variant="top" src={img} />
                <Card.Body className='d-flex flex-column'>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Subtitle>${price}</Card.Subtitle>
                    <Button
                        onClick={() => navigateToCheckout(id)}
                        className='mt-auto'
                        variant="dark">
                        Make an appointment
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;