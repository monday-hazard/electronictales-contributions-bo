import React from 'react';
import Card from '../../../elements/card/Card';
import CardContent from '../../../elements/card/CardContent';
import Button from '../../../elements/button/Button';

import TltaSmall from '../../../../resources/img/tlta-wording.svg';
import RegularSmall from '../../../../resources/img/regular-wording.svg';

const ArticleTypeChoice = ({ chooseType }) => {

   const introTLTA = 'C\'est une question qu\'on n\'ose plus poser et qui appelle un contenu court destiné au "Tinder du dev" : explicite, imagé mais surtout court.';
   const introRegular = 'Il s\'agit d\'articles au format somme toute assez classique : sans contraintes sur la longueur, ils peuvent contenir des liens, il sont explicatifs mais surtout explicites.';
   const urlTlta = 'https://platform.electronictales.io/modern-world/articles/le-code-coverage-cest-quoi'
   const urlRegular = "https://platform.electronictales.io/modern-world/articles/pourquoi-jai-envie-de-quitter-le-monde-de-la-tech-environ-dix-fois-par-mois"

   const handleTltaClick = () => {
      chooseType('Too Late To Ask');
      //setAlert ?
   }
   const handleArticleClick = () => {
      chooseType('article');
   }

   return (
      <section className="container-topic topic-info">
         <Card isSquare>
            <CardContent title="TooLateToAsk" text={introTLTA} srcImg={TltaSmall} alt="Pictogramme Smartphone" urlExample={urlTlta} />
            <Button buttonStyle="btn-outline" onClick={() => handleTltaClick()}>Écrire un TooLateToAsk</Button>
         </Card>
         <Card isSquare>
            <CardContent title="Article" text={introRegular} srcImg={RegularSmall} alt="Pictogramme stylo" urlExample={urlRegular} />
            <Button buttonStyle="btn-outline" onClick={() => handleArticleClick()}>Écrire un article</Button>
         </Card>
      </section>
   )
};

export default ArticleTypeChoice;
