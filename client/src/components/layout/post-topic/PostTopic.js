import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Card from '../../elements/card/Card';
import CardContent from '../../elements/card/CardContent';
import Hero from '../../elements/hero/Hero';
import Modal from '../../elements/modal/Modal';
import TopicForm from './topic-form/TopicForm';

import { POST_TOPIC_SUCCESS_MODAL_CONTENT } from '../../../dictionnary/modalContentList';
import TltaSmall from '../../../resources/img/tlta-small-wording.png';
import RegularSmall from '../../../resources/img/regular-small-wording.png';

import './PostTopic.css';

const PostTopic = ({ isAuthenticated }) => {
   const titleText = 'Proposer un sujet';
   const subtitleText =
      'Propose un sujet par et pour la communauté Electronic Tales. Tu peux penser à un type de contenu en particulier. Il y en a deux :';
   const introTLTA =
      'C\'est une question qu\'on n\'ose plus poser et qui appelle un contenu court destiné au "Tinder du dev" : explicite, imagé mais surtout court.';
   const introRegular =
      'Il s\'agit d\'articles au format somme toute assez classique : sans contraintes sur la longueur, ils peuvent contenir des liens, il sont explicatifs mais surtout explicites.';

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
         <Modal
            content={POST_TOPIC_SUCCESS_MODAL_CONTENT}
            redirectPath={isAuthenticated ? '/dashboard' : '/'}
         />
      </div>
   );
};

PostTopic.propTypes = {
   isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
   isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(PostTopic);
