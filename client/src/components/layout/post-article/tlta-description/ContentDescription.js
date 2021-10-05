import React from 'react';
import Card from '../../../elements/card/Card';

import './ContentDescription.css';

const ContentDescription = ({ type, chosenType }) => {

   const titleTlta = `Mais qu'est-ce au juste qu'un contenu Too Late To Ask ?`;
   const titleRegular = `Des tips pour rédiger un article ?`;
   const descriptionP1Tlta = `Et bien c'est un contenu assez bref et très clair ✨, qui répond à une question qui semble trop "basique" pour qu'on ose la poser. Écrire une réponse courte et claire est en fait un véritable challenge technique 🦾 !`;
   const descriptionP1Regular = `Il n'y a pas de contraintes sur la longueur de l'article. N'hésite pas à insérer des liens vers des resources intéressantes (vidéos, articles, podcasts...). Écrire une explication claire sur un sujet technique est en fait un véritable challenge 🦾 : on a hâte de te lire 🤗`;
   const descriptionP2 = `Garde à l'esprit que la personne qui te lit n'est probablement pas familère avec ton sujet ✅, n'est peut-être pas du même genre que toi ✅, n'a peut-être pas la même culture que toi ✅ et cherche un contenu clair ✅.`;
   const descriptionP3 = `Dans ce sens, n'hésite pas à avoir recours à une analogie 💡 et à expliciter au maximum 🥁 .`;

   return (
      <section className="container-topic">
         <Card isSquare>
            <h3 className="description-title">{type === 'TLTA' || chosenType === 'Too Late To Ask' ? titleTlta : titleRegular}</h3>
            <p className="description-text">{type === 'TLTA' || chosenType === 'Too Late To Ask' ? descriptionP1Tlta : descriptionP1Regular}</p>
            <p className="description-text">{descriptionP2}</p>
            <p className="description-text">{descriptionP3}</p>
         </Card>

      </section >
   );
};

export default ContentDescription;
