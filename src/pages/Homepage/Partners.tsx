import React from 'react';
import axa from '../../assets/images/axa.svg';
import concordia from '../../assets/images/concordia.svg';
import mobilier from '../../assets/images/mob.svg';
import rpopulaire from '../../assets/images/rpopulaire.svg';
import vaudoise from '../../assets/images/vaudoise.svg';
import zurich from '../../assets/images/zurich.svg';

const Partners = () => {
    return (
        <section className='partners'>
            <div className='partners__content'>
                <div className='partners__content-separator'>&nbsp;</div>
                <div className='partners__content-item'>
                    <h1 className='partners__content-item--title'>Nos Partenaires</h1>
                    <h3 className='partners__content-item--subtitle'>Ces entreprises nous ont fait conﬁance et nous les remercions chaleureusement pour leur agréable et régulière collaboration.</h3>
                </div>
                <div className='partners__content-separator'>&nbsp;</div>
                
                <div className='partners__content-cols'>
                    <div className='partners__content-cols-item'>
                        <img src={vaudoise} width="100%" height="auto" alt="Vaudoise assurance"/>
                    </div>
                    <div className='partners__content-cols-item'>
                        <img src={rpopulaire} width="100%" height="auto" alt="Retraite Populaire" />
                    </div>
                    <div className='partners__content-cols-item'>
                        <img src={mobilier} width="100%" height="auto" alt="La Mobilière" />
                    </div>
                </div>
                <div className='partners__content-cols'>
                    <div className='partners__content-cols-item'>
                        <img src={axa} width="100%" height="auto" alt="Axa Winthertur"/>
                    </div>
                    <div className='partners__content-cols-item'>
                        <img src={zurich} width="100%" height="auto" alt="Zurich Assurance"/>
                    </div>
                    <div className='partners__content-cols-item'>
                        <img src={concordia} width="100%" height="auto" alt="Concordia" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners;