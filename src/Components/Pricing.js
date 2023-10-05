import React, { useState, useEffect } from 'react';
import '../Style/Pricing.css';
import Slider from './Slider';
import PriceBoard from './PriceBoard';

const Pricing = () => {
    const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

    useEffect(() => {
        // Function to handle window resize
        const handleResize = () => {
            const newWidth = window.innerWidth;
            setIsMobileView(newWidth <= 768); // Render Slider if width is less than or equal to 768
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Call the function initially
        handleResize();

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='pricing-container'>
            <div className="heading">
                <div className="upper-heading">Choose Your Plan</div>
                <div className="lower-heading">Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.</div>
            </div>
            {isMobileView ? <Slider /> : <PriceBoard />}
        </div>
    );
}

export default Pricing;
