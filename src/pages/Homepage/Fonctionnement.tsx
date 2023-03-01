import React from 'react';
import howTo from '../../assets/images/howTo-min.jpg';
import agenda from '../../assets/images/agenda-min.png';

const Fonctionnement = () => {
    return (
        <section className='howTo'>
            <div className='howTo__header' style={{ backgroundImage: `url(${howTo})` }}>
                <div className='howTo__header__content'>
                    <div className='howTo__header__content-separator' />
                    <div className='howTo__header__content-text'>
                        <h1 className='howTo__header__content-title'>FONCTIONNEMENT</h1>
                        <h3 className='howTo__header__content-subtitle'>
                            Nous sommes convaincus qu’un contact personnel est le début d’une bonne relation.
                        </h3>
                    </div>
                    <div className='howTo__header__content-separator' />
                </div>
            </div>
            <div className='howTo__body'>
                <div className='howTo__body__left'>
                    <div className='howTo__body__left-img'>
                        <img src={agenda} alt='agenda' width="100%" height="auto" />
                    </div>
                </div>
                <div className='howTo__body__right'>
                    <div className='howTo__body__right-item'>
                        <div className='howTo__body__right-item--number'>01</div>
                        <div className='howTo__body__right-item--text'>
                            <p>Prendre contact avec nous pour nous soumettre votre demande</p>
                            <p>
                                Contactez-nous par téléphone ou via le formulaire prévu à cet effet et nous nous occupons de transmettre votre demande au spécialiste.
                            </p>
                        </div>
                    </div>
                    <div className='howTo__body__right-item'>
                        <div className='howTo__body__right-item--number'>02</div>
                        <div className='howTo__body__right-item--text'>
                            <p>Un entretien personnel de qualité</p>
                            <p>
                                Notre spécialiste prend contact avec vous dans les 24 heures et vous définissez ensemble vos besoins. Si besoin d’autres entretiens seront proposés.
                            </p>
                        </div>
                    </div>
                    <div className='howTo__body__right-item'>
                        <div className='howTo__body__right-item--number'>03</div>
                        <div className='howTo__body__right-item--text'>
                            <p>Mise en place de la solution</p>
                            <p>
                                Notre conseiller vous présente sa solution et sa mise en place afin que votre demande soit entièrement satisfaite. Il la corrige et cas de besoin, vous la soumet à nouveau.
                            </p>
                        </div>
                    </div>
                    <div className='howTo__body__right-item'>
                        <div className='howTo__body__right-item--number'>04</div>
                        <div className='howTo__body__right-item--text'>
                            <p>Votre retour est important</p>
                            <p>
                                Votre satisfaction nous tient à cœur ainsi nous reprenons contact pour mesurer votre degré de satisfaction. Vous avez la possibilité de nous soumettre une nouvelle demande afin que nous vous trouvions une nouvelle solution.
                            </p>
                        </div>
                    </div>

                    <div className="howTo__body__right-footer">
                        <p>
                            Rejoignez notre communauté de clients satisfaits et découvrez comment One-Conseils peut vous aider à obtenir les meilleurs résultats.
                        </p>
                        <button className="howTo__body__right-footer-button">Contactez-nous !</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Fonctionnement;
