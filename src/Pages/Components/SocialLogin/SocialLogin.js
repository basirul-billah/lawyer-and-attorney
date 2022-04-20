import React from 'react';
import { Button } from 'react-bootstrap';

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50 m-2'></div>
                <p className='mt-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50 m-2'></div>
            </div>
            <div className='mb-4'>
                <Button variant="dark">Login using Google</Button>
            </div>
        </div>
    );
};

export default SocialLogin;