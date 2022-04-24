import React from 'react';
import { Card } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <Card className='mx-auto my-4' style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Basirul Billah</Card.Title>
                    <Card.Text>
                        I want to build beautiful websites and work as web developer in a good company. I seek to improve myself to an extent where I will get very comfortable using and learning new technology. 
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default About;