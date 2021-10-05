import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { postTopic } from '../../../../redux/actions/topic';
import { setAlert } from '../../../../redux/actions/alert';

import Input from '../../../elements/input/Input';

import { emailCheckingRegex } from '../../../../utils/regex';

import { POST_TOPIC_ERROR_ALERT_CONTENT } from '../../../../dictionnary/alertContentList';
import { TOPIC_FORM } from '../../../../dictionnary/TopicList';

import './TopicForm.css';

const TopicForm = ({ setAlert, postTopic }) => {
   const [formData, setFormData] = useState({
      name: '',
      emailContributor: '',
      slackContributor: '',
      type: 'any',
      lockedBy: false,
   })
   const [selectedTopicType, selectTopicType] = useState('any');
   const [lockedBy, setLockedBy] = useState(false);
   const { name, emailContributor, slackContributor } = formData;

   // errors
   const [topicNameNotValid, setTopicNameNotValid] = useState(undefined);
   const [emailNotValid, setEmailNotValid] = useState(undefined);

   const onChange = (e) => {
      switch (e.target.name) {
         case 'name':
            e.target.value = e.target.value.trim();
            e.target.value.length >= 2
               ? setTopicNameNotValid(false)
               : setTopicNameNotValid(true);
            break;
         case 'emailContributor':
            e.target.value = e.target.value.trim();
            emailCheckingRegex.test(e.target.value)
               ? setEmailNotValid(false)
               : setEmailNotValid(true);
            break;
         case 'slackContributor':
            e.target.value = e.target.value.trim();
            break;
         default:
            break;
      }
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const handleTopicTypeChange = (selected) => {
      selectTopicType(selected);
      setFormData({ ...formData, type: selected });
   }

   const lockedByAfterSubmit = () => {
      setLockedBy(!lockedBy);
   }

   const onSubmit = e => {
      e.preventDefault();
      const formErrors = topicNameNotValid || emailNotValid ;
      if (formErrors) {
         setAlert(
            POST_TOPIC_ERROR_ALERT_CONTENT.message,
            'error'
      );
      } else {
         postTopic({ name, emailContributor, slackContributor, type: selectedTopicType, lockedBy });
      }
   }


   return (
      <section className='form-container'>
         <div className='form-wrapper topic-form-container'>
            <form className='form' onSubmit={e => onSubmit(e)} >
               <Input
                  required
                  label={{ className: "picto idea-picto", position: "before" }}
                  className={'input-form input-form-white'
                     + `${topicNameNotValid === undefined ? ''
                     : topicNameNotValid ? ' invalid-input' : ' valid-input'}`
                  }
                  type='text'
                  name='name'
                  placeholder='Ton super sujet *'
                  value={name}
                  onChange={(e) => onChange(e)}
                  minLength={2}
                  maxLength={73}
               />
               {topicNameNotValid && (
                  <span className="error-label">{TOPIC_FORM.errors.invalid_topic_name}</span>
               )}
               <Input
                  label={{ className: "picto email-picto", position: "before" }}
                  className={'input-form input-form-white'
                     + `${emailNotValid === undefined ? ''
                     : emailNotValid ? ' invalid-input' : ' valid-input'}`}
                  type='email'
                  name='emailContributor'
                  placeholder='Ton email *'
                  value={emailContributor}
                  onChange={(e) => onChange(e)}
                  required
               />
               {emailNotValid && (
                  <span className="error-label">{TOPIC_FORM.errors.invalid_email}</span>
               )}               
               <Input
                  label={{ className: "picto password-picto", position: "before" }}
                  className='input-form input-form-white'
                  type='text'
                  name='slackContributor'
                  placeholder='Tu as un pseudo sur notre Slack ?'
                  value={slackContributor}
                  onChange={(e) => onChange(e)}
               />
               <p className="topic-type-label" htmlFor="type">
                  Le type de contenu que tu imagines pour ce sujet :
               </p>
               <div className="topic-type-choice-group">
                  <Input
                     className="styled-input"
                     type="radio"
                     id="typeChoiceTLTA"
                     name="type"
                     value="TLTA"
                     checked={selectedTopicType === "TLTA"}
                     onClick={
                        (selectedTopicType !== "TLTA")
                           ? () => handleTopicTypeChange('TLTA')
                           : undefined}
                     label={{ htmlFor: "typeChoiceTLTA", labelText: "Too Late Too Ask" }}
                  />
                  <Input
                     className="styled-input"
                     type="radio"
                     id="typeChoiceRegular"
                     name="type"
                     value="regular"
                     checked={selectedTopicType === "regular"}
                     onClick={
                        (selectedTopicType !== "regular")
                           ? () => handleTopicTypeChange('regular')
                           : undefined}
                     label={{ htmlFor: "typeChoiceRegular", labelText: "Article" }}
                  />
                  <Input
                     className="styled-input"
                     type="radio"
                     id="typeChoiceAny"
                     name="type"
                     value="any"
                     checked={selectedTopicType === "any"}
                     onClick={
                        (selectedTopicType !== "any")
                           ? () => handleTopicTypeChange('any')
                           : undefined}
                     label={{ htmlFor: 'typeChoiceAny', labelText: "Peu m'importe" }}
                  />
               </div>
               <Input
                  label={{
                     htmlFor: 'lockedBy',
                     labelText: 'Souhaites-tu écrire l\'article toi-même ?',
                     position: 'before', className: "text-checkbox-remember-me"
                  }}
                  className='btn-checkbox-remember-me'
                  type="checkbox"
                  name='lockedBy'
                  placeholder='Oui ou non ?'
                  value={lockedBy}
                  onChange={lockedByAfterSubmit}
               />
               <Input
                  onlyText
                  type='submit'
                  value="Zou, j'envoie !"
                  className='btn-form'
               />
            </form>
         </div>
      </section>
   );
};

TopicForm.propTypes = {
   postTopic: PropTypes.func.isRequired,
   setAlert: PropTypes.func.isRequired,
};

export default connect(null, { postTopic, setAlert })(TopicForm);
