import React from 'react';
import { Card } from 'react-bootstrap';

const Checkout = () => {

    return (
        <div className='d-flex justify-content-center'>
            <Card className='m-4' border="danger" style={{ width: '30rem' }}>
                <Card.Header>Check Out</Card.Header>
                <Card.Body>
                    <Card.Title>Thank you for choosing our service!</Card.Title>
                    <Card.Text>
                        Please contact the office for more details. Thank you!
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Checkout;