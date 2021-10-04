import React, { Fragment } from "react";
import PropTypes from "prop-types";
import "./PageSection.css";
import RichImage from "./rich-image/RichImage";
import Button from "../button/Button";
import { Link } from "react-router-dom";
import TitleSection from "./title-section/TitleSection";
import TextSection from "./text-section/TextSection";
import TopicsList from "../topics/topics-list/TopicsList";


const PageSection = ({
   imgSrc,
   imgLeft,
   hasText,
   isTopic
}) => {
   return (
      <section className="container section-home">
         {imgLeft && <RichImage isTopicSection imgSrc={imgSrc} />}
         <div className="text-content">
            {isTopic
               ? <TitleSection title="Proposer un sujet" subtitle="Tu veux voir aborder un sujet dans l'esprit Electronic Tales ? Tu es au bon endroit." />
               : <TitleSection title="Rédiger un article" subtitle="Tu sais comment expliquer clairement un sujet qui t'intéresse et tu dois te rentenir de splainer tes proches (🧑‍🤝‍🧑 , 🐈 , 🪴) ? On peut t'aider." />
            }
            {hasText
               ? <Fragment>
                  <TextSection textSection="Il y a des questions qu'on n'ose plus poser après un certain temps (d'une durée tout à fait aléatoire). Ici, tu peux proposer sous pseudo 🥸 (et sans système de notation) un sujet que tu aimerais voir abordé avec clarté." />
                  <TextSection textSection="Tu peux aussi être d'humeur 🛌🏽 ... velléitaire (si, si, ça arrive). Propose un sujet 
                   et laisse quelqu\'un·e d\'inspiré·e se charger de rédiger un contenu à retrouver sur notre plateforme. Et oui, on a pensé à toi (et à nous)." />
                  <Link to="/post-topic">
                     <Button>Let's go !</Button>
                  </Link>
               </Fragment>
               : <TopicsList />
            }
         </div>
         {imgLeft || <RichImage imgSrc={imgSrc} />}
      </section>
   )
}

PageSection.propTypes = {
   imgSrc: PropTypes.string.isRequired,
   imgLeft: PropTypes.bool,
   hasText: PropTypes.bool,
   isTopic: PropTypes.bool
}

export default PageSection;