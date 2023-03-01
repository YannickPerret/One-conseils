import React from 'react';
import linkedin from '../assets/images/linkedin.svg';
import facebook from '../assets/images/facebook.svg';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer__container">
                <div className="footer__container--header">
                    <p>ONE-CONSEILS SARL</p>
                </div>

                <div className='footer__container__item'>
                    <div className="footer__container__item--body">
                        <ul>
                            <li><a href="#">Accueil</a></li>
                            <li><a href="#">Nos Services</a></li>
                            <li><a href="#">Fonctionnement</a></li>
                            <li><a href="#">Philosophie</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div className='footer__container__two'>
                    <div className='footer__container__two__item'>
                        <div className="footer__container__two__item--header">
                            <p>Accès direct</p>
                        </div>
                        <div className="footer__container__two__item--body">
                            <ul>
                                <li><a href="#">Assurance</a></li>
                                <li><a href="#">Comptabilité & Administration</a></li>
                                <li><a href="#">Immobilier</a></li>
                                <li><a href="#">Informatique</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className='footer__container__two__item'>
                        <div className="footer__container__two__item--header">
                            <h2>Newsletter</h2>
                            <button>Inscription &gt;</button>
                        </div>
                        <div className="footer__container__two__item--body">
                            <p>Suivre One-Conseils</p>
                            <div className="footer__container__two__item--body--image">
                                <img src={linkedin} alt="linkedin" width="100%" height="auto" />
                                <img src={facebook} alt="facebook" width="100%" height="auto" />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="footer__container--footer">
                    <a href="#">Conditions Générales</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;