import React, { useState, useEffect } from 'react';
import '../Style/Clients.css';
import Cards from './Cards';
import MobileCards from './MobileCards';

const Clients = () => {
    const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="clients-container">
            What Our Clients Say
            {isMobileView ? <MobileCards /> : <Cards />}
        </div>
    );
}

export default Clients;
