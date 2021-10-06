import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getSelectedTopic } from '../../../redux/actions/topic';

import Hero from '../../elements/hero/Hero';
import ArticleTypeChoice from './article-type-choice/ArticleTypeChoice';
import ContentDescription from './content-description/ContentDescription';
import ArticleForm from './article-form/ArticleForm'

import './PostArticle.css';

const PostArticle = ({
   auth: { isAuthenticated, loading, user },
   getSelectedTopic,
   topic: { selectedTopic }
}) => {
   useEffect(() => {
      getSelectedTopic(localStorage.getItem('topicId'));
   }, [getSelectedTopic]);

   const { _id, type, name } = selectedTopic;
   const titleText = name;

   const [chosenType, setChosenType] = useState('');
   const chooseType = newType => {
      setChosenType(newType);
   }

   const subtitleText =
      `Salut ${user ? user.userName : ''}, tu as choisi de rédiger un contenu de type 
         ${chosenType ? chosenType
         : type === 'any' ? '"au choix"'
            : type === 'regular' ? 'article'
               : 'Too Late To Ask'}
               . Bonne rédaction !`;

   // A l'envoi, 
   // - annuler selected topic et 
   // - passer topic à inProgress
   // - vider le LS de topicId

   return (
      <div className="post-article">
         <Hero
            titleText={titleText}
            subtitleText={subtitleText} />

         {type === 'any' && !chosenType &&
            <ArticleTypeChoice chooseType={chooseType} />
         }

         {type === 'any' && !chosenType ||
            <ContentDescription type={type} chosenType={chosenType} />
         }

         <ArticleForm topicType={chosenType ? chosenType : type} topicId={_id} />
         {/*
         <section className="container-topic"><TopicForm /></section>
         <Modal
            content={POST_TOPIC_SUCCESS_MODAL_CONTENT}
            redirectPath={isAuthenticated ? '/dashboard' : '/'}
         /> */}
      </div>
   );
};

PostArticle.propTypes = {
   isAuthenticated: PropTypes.bool,
   getSelectedTopic: PropTypes.func.isRequired,
   auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
   isAuthenticated: state.auth.isAuthenticated,
   auth: state.auth,
   topic: state.topic
})

export default connect(mapStateToProps, { getSelectedTopic })(PostArticle);
