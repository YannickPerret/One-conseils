import React from 'react';
import linkedin from '../../assets/images/linkedin.svg';
import facebook from '../../assets/images/facebook.svg';

const Contact = () => {
    return (
        <section className="contact">
            <div className="contact__form-container">
                <div className="contact__text-container">
                    <p>Laissez-nous un message et nous vous contacterons dès que possible</p>
                </div>
                <form className="contact__form">
                    <div className="contact__input-container">
                        <input className="contact__input-container__input" type="text" placeholder="Nom" />
                        <input className="contact__input-container__input" type="text" placeholder="Email" />
                    </div>
                    <textarea className="contact__textarea" placeholder="Message"></textarea>
                    <button className="contact__button" type="submit">Envoyer &gt;</button>
                </form>
            </div>
            <div className="contact__info">
                <div className="contact__info-container">
                    <p>ONE-CONSEILS</p>
                    <p>Rue du Midi 23 <br /> 1400 Yverdon-Les-Bains</p>
                    <p><a href="tel:+41787386192">078 / 738 61 92</a></p>
                </div>
                <div className="contact__info-icon">
                    <img src={linkedin} alt="Icon 1" width="100%" height="auto"  />
                    <img src={facebook} alt="Icon 2"  width="100%" height="auto" />
                </div>
            </div>
        </section>
    );
};

export default Contact;
