import React from 'react';
import Card from '../../../elements/card/Card';

import './ContentDescription.css';

const ContentDescription = ({ type, chosenType }) => {

   const titleTlta = `Mais qu'est-ce au juste qu'un contenu Too Late To Ask ?`;
   const titleRegular = `Des tips pour rédiger un article ?`;
   const descriptionP1Tlta = `Et bien c'est un contenu assez bref et très clair ✨, qui répond à une question qui semble trop "basique" pour qu'on ose la poser.`;
   const descriptionP1Regular = `Il n'y a pas de contraintes sur la longueur de l'article. N'hésite pas à insérer des liens vers des resources intéressantes (vidéos, articles, podcasts...).`;
   const descriptionP2 = `Garde à l'esprit que la personne qui te lit n'est probablement pas familère avec ton sujet ✅, n'est peut-être pas du même genre que toi ✅, n'a peut-être pas la même culture que toi ✅ et cherche un contenu clair ✅.`;
   const descriptionP3 = `Dans ce sens, n'hésite pas à avoir recours à une analogie 💡 et à expliciter au maximum 🥁 . Écrire une explication claire sur un sujet technique est en fait un véritable challenge 🦾 : on a hâte de te lire 🤗`;
   const urlExempleTlta = 'https://platform.electronictales.io/modern-world/articles/le-code-coverage-cest-quoi'
   const urlExempleRegular = "https://platform.electronictales.io/modern-world/articles/pourquoi-jai-envie-de-quitter-le-monde-de-la-tech-environ-dix-fois-par-mois"

   return (
      <section className="container-topic">
         <Card isSquare>
            <h3 className="description-title">{type === 'TLTA' || chosenType === 'Too Late To Ask' ? titleTlta : titleRegular}</h3>
            <p className="description-text">{type === 'TLTA' || chosenType === 'Too Late To Ask' ? descriptionP1Tlta : descriptionP1Regular}</p>
            <p className="description-text">{descriptionP2}</p>
            <p className="description-text">{descriptionP3}</p>
            <p className="descrition-text last-child">N'hésite pas à aller voir
               <a className="example-link" href={type === 'TLTA' || chosenType === 'Too Late To Ask' ? urlExempleTlta : urlExempleRegular} target="_blank" rel="noreferrer"> un exemple </a>
               👀 .</p>
         </Card>

      </section >
   );
};

export default ContentDescription;
