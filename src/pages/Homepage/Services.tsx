import React from 'react';
import assurance from '../../assets/images/sigle_assurances.svg';
import comptabilite from '../../assets/images/sigle_comptabilite.svg';
import immobilier from '../../assets/images/sigle_immobilier.svg';
import informatique from '../../assets/images/sigle_informatique.svg';

const Services = () => {
  return (
    <section className="services">
      <div className="services__item">
        <img src={assurance} alt="Service 1" className="services__item-img" width="100%" height="auto" />
        <h4 className="services__item-title">Assurances</h4>
        <p className="services__item-desc">Nous travaillons ensemble pour trouver la solution qui vous correspond, en analysant vos besoins spécifiques.</p>
        <a href="#" className="services__item-link">En savoir plus</a>
      </div>
      <div className="services__item">
        <img src={comptabilite} alt="Service 2" className="services__item-img" width="100%" height="auto"  />
        <h4 className="services__item-title">Comptabilité & Administration</h4>
        <p className="services__item-desc">Pour votre déclaration d’impôt ou pour une simple question fiscale nous vous trouvons la réponse rapidement.</p>
        <a href="#" className="services__item-link">En savoir plus</a>
      </div>
      <div className="services__item">
        <img src={immobilier} alt="Service 3" className="services__item-img" width="100%" height="auto"  />
        <h4 className="services__item-title">Immobilier</h4>
        <p className="services__item-desc">Devenir propriétaire est un rêve possible alors nous vous aidons à le réaliser par l’analyse de votre situation financière.</p>
        <a href="#" className="services__item-link">En savoir plus</a>
      </div>
      <div className="services__item">
        <img src={informatique} alt="Service 4" className="services__item-img" width="100%" height="auto" />
        <h4 className="services__item-title">Informatique</h4>
        <p className="services__item-desc">Créer votre site internet de manière professionnelle avec des outils dans l’ère du temps n’est pas à la portées de tous.</p>
        <a href="#" className="services__item-link">En savoir plus</a>
      </div>
    </section>
  );
};

export default Services;
