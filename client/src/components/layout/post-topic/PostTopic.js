import React from 'react';
import Card from '../../elements/card/Card';
import CardContent from '../../elements/card/CardContent';
import Hero from '../../elements/hero/Hero';
import TopicForm from './topic-form/TopicForm';

import TltaSmall from '../../../resources/img/tlta-small-wording.png';
import RegularSmall from '../../../resources/img/regular-small-wording.png';

import './PostTopic.css';

const PostTopic = () => {
   const titleText = 'Proposer un sujet';
   const subtitleText =
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, quidem accusamus totam incidunt quod a labore rerum rem nihil deleniti!';
   const introTLTA =
      'C\'est un contenu pour le Tinder du dev : court, explicatif, imagé mais surtout court.';
   const introRegular =
      'C\'est un article plus long sans contraintes de longueur : long, détaillé, explicatif mais surtout long.';

   // TODO Créer URL example TLTA & Regular
   const urlTlta = 'https://platform.electronictales.io/modern-world/articles/le-code-coverage-cest-quoi'
   const urlRegular = "https://platform.electronictales.io/modern-world/articles/pourquoi-jai-envie-de-quitter-le-monde-de-la-tech-environ-dix-fois-par-mois"

   return (
      <div className="post-topic">
         <Hero titleText={titleText} subtitleText={subtitleText} />
         <section className="container-topic topic-info">
            <Card isSquare>
               <CardContent title="TooLateToAsk" text={introTLTA} srcImg={TltaSmall} alt="Pictogramme Smartphone" urlExample={urlTlta} />
            </Card>
            <Card isSquare>
               <CardContent title="Regular" text={introRegular} srcImg={RegularSmall} alt="Pictogramme stylo" urlExample={urlRegular} />
            </Card>
         </section>
         <section className="container-topic"><TopicForm /></section>
      </div>
   );
};

export default PostTopic;
