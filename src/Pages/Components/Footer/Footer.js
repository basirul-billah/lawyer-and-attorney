import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='Footer bg-dark text-white p-4'>
            <footer>
                <h6>Copyright @ {year}</h6>
            </footer>
        </div>
    );
};

export default Footer;