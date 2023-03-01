import React from 'react';
import hero from '../../assets/images/hero.jpg';

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero__background" style={{ backgroundImage: `url(${hero})` }} />
            <div className="hero__content">
                <h1 className="hero__title">Vos solutions administratives sur mesure</h1>
            </div>
        </div>
    );
};

export default Hero;