import React from 'react';
import { Card } from 'react-bootstrap';

const Review = ({ review }) => {
    const { name, comment } = review;
    return (
        <div className='col-12 col-lg-3 d-flex justify-content-center m-2'>
            <Card style={{ width: '18rem', height: '14rem' }}>
                <Card.Body className='d-flex flex-column'>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {comment}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Review;