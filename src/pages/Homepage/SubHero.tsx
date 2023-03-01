import React from 'react';
import icone from '../../assets/images/sigle_homepage.svg';

const SubHero = () => {
    return (
        <section className='subHero'>
            <div className='subHero__icone'>
                <img src={icone} alt='placeholder' className='subHero__icone-img' width="100%" height="auto" />
            </div>
            <div className='subHero__content'>
                <div className='subHero__content-item'>
                    <h2>Spécialiste de services de gestion, courtage, Administration et informatique pour les entreprises</h2>
                </div>
                <div className='subHero__content-item--separator'></div>
                <div className='subHero__content-item'>
                    <h5>ONE-Conseils englobe toutes vos solutions administratives privées et professionnelles en Suisse romande avec compétences simplicité pour chaque domaine et service.</h5>
                    <br />
                    <h5>Un seul contract et un service sur mesure pour chaque situation administrative, en fonction de vos besoins</h5>
                </div>
            </div>
        </section>
    );
};

export default SubHero;