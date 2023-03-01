import React from 'react';
import julienPerret from '../../assets/images/JulienPerret.jpg';
import facebook from '../../assets/images/facebook.svg';
import linkedin from '../../assets/images/linkedin.svg';

const About = () => {
    return (
        <section className="about">
            <div className="about__cols">
                <div className="about__cols__item">
                    <div className="about__cols__item-text">
                        <p>Chez One-Conseils, nous croyons que les services tertiaires ne doivent pas être complexes ni fastidieux. C’est pourquoi nous avons créé un concept simple, efficace et accessible, qui vous permet de bénéficier de l’expertise de nos conseillers sans avoir à vous soucier des détails techniques.</p>
                        <p>One-conseils Sàrl peut vous offrir un service professionnel pour simplifier vos tâches administratives. Avec 15 ans d’expérience, nous pouvons vous aider dans les domaines proposés.</p>
                    </div>
                </div>
                <div className="about__cols__item-separator">&nbsp;</div>
                <div className="about__cols__item">
                    <div className="about__cols__item-text">
                        <p>Notre équipe est composée de professionnels passionnés, qui mettent leur expertise et leur engagement à votre disposition pour vous aider à trouver les meilleures solutions pour votre entreprise.</p>
                        <p>Nous savons que chaque situation est unique, c'est pourquoi nous travaillons en étroite collaboration avec vous pour comprendre vos besoins et vous offrir des conseils personnalisés.</p>
                    </div>
                </div>
            </div>

            <div className="about__cols">
                <div className="about__cols__item">
                    <div className="about__cols__item-img">
                        <img src={julienPerret} width="100%" height="auto" alt="Monsieur Julien Perret photo"/>
                        <div className='about__cols__item-info'>
                            <p>JULIEN PERRET</p>
                            <p>Directeur</p>
                        </div>

                        <div className="about__cols__item-social">
                            <img src={linkedin} width="100%" height="auto" alt="linkedin" />
                            <img src={facebook} width="100%" height="auto" alt="facebook" />
                        </div>
                    </div>
                </div>
                <div className="about__cols__item-separator">&nbsp;</div>
                <div className="about__cols__item">
                    <div className="about__cols__item-text">
                        <blockquote>“ Nous sommes convaincus que notre entreprise peut vous apporter une valeur ajoutée considérable et nous sommes impatients de vous montrer comment nous pouvons vous aider à atteindre vos objectifs.”</blockquote>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;