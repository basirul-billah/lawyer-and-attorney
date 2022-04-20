import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Service = ({ service }) => {
    const { img, title, description } = service;
    return (
        <div className='col-12 col-lg-3 m-2'>
            <Card style={{ width: '18rem', height: '24rem' }}>
                <Card.Img style={{ height: '9rem'}} variant="top" src={img} />
                <Card.Body className='d-flex flex-column'>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button className='mt-auto' variant="dark">Make an appointment.</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;