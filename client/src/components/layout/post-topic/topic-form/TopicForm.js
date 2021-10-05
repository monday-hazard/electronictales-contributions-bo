import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { postTopic } from '../../../../redux/actions/topic';
import { setAlert } from '../../../../redux/actions/alert';

import Input from '../../../elements/input/Input';

import './TopicForm.css';


const TopicForm = ({ postTopic }) => {
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

   const onChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const handleTopicTypeChange = (selected) => {
      selectTopicType(selected);
      setFormData({ ...formData, ['type']: selected });
   }

   const lockedByAfterSubmit = () => {
      setLockedBy(!lockedBy);
   }

   const onSubmit = e => {
      e.preventDefault();

      /* TODO : check if there are errors prior to API call
            let errors = false;
            if ( errors ) {
               setAlert('Message 😱', 'error');
            } 
            else {
      */
      postTopic({ name, emailContributor, slackContributor, type: selectedTopicType, lockedBy });
      // }
   }


   return (
      <section className='form-container'>
         <div className='form-wrapper topic-form-container'>
            <form className='form' onSubmit={e => onSubmit(e)} >
               <Input
                  label={{ className: "picto idea-picto", position: "before" }}
                  className='input-form input-form-white'
                  type='text'
                  name='name'
                  placeholder='Ton super sujet *'
                  value={name}
                  onChange={(e) => onChange(e)}
                  required
                  maxLength={73}
               />
               <Input
                  label={{ className: "picto email-picto", position: "before" }}
                  className='input-form input-form-white'
                  type='email'
                  name='emailContributor'
                  placeholder='Ton email *'
                  value={emailContributor}
                  onChange={(e) => onChange(e)}
                  required
               />
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
   isAuthenticated: PropTypes.bool,
   setAlert: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
   isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { postTopic, setAlert })(TopicForm);
