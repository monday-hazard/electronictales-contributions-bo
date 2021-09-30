import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { postTopic } from '../../../../redux/actions/topic';
import { setAlert } from '../../../../redux/actions/alert';
import Alert from '../../../elements/alert/Alert';
import { Redirect } from 'react-router';
import Input from '../../../elements/input/Input';

import './TopicForm.css';
import Button from '../../../elements/button/Button';


const TopicForm = ({ isAuthenticated, postTopic, setAlert }) => {
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
      console.log(e.target);
   };

   const handleTopicTypeChange = (selected) => {
      selectTopicType(selected);
      setFormData({ ...formData, ['type']: selected });
   }

   const onSubmit = e => {
      e.preventDefault();

/* TODO : check if there are errors
      let errors = false;
      if ( errors ) {
         setAlert('Message 😱', 'error');
      } 
      else {
*/
         postTopic({ name, emailContributor, slackContributor, type, lockedBy });

         if (isAuthenticated) {
            // openModal(); In fact, we could open the modal in the dashboard once authenticated :/
            return <Redirect to="/dashboard" />
         } else {
            <Redirect to='/' />
         }
      // }
   }


   return (
      <form className='topic-form form' onSubmit={e => onSubmit(e)} >
            <Input
               type='text'
               name='name'
               placeholder='Ton super sujet'
               value={name}
               onChange={(e) => onChange(e)}
               required
               maxLength={73}
            />
            <Input
               type='email'
               name='emailContributor'
               placeholder='Ton email'
               value={emailContributor}
               onChange={(e) => onChange(e)}
               required
            />
            <Input
               type='text'
               name='slackContributor'
               placeholder='Ton pseudo sur notre slack'
               value={slackContributor}
               onChange={(e) => onChange(e)}
            />
            <label className="topic-type-label" htmlFor="type">
               Le type de contenu que tu imagines
            </label>
            <div className="topic-type-choice-group">
               <Input
                  type="radio"
                  id="typeChoiceTLTA"
                  name="type"
                  value="TLTA"
                  checked={selectedTopicType === "TLTA"}
                  onClick={
                     (selectedTopicType !== "TLTA") 
                        ? () => handleTopicTypeChange('TLTA')
                        : undefined }
                  label={{ htmlFor: "typeChoiceTLTA", labelText: "Too Late Too Ask" }}
               />
               <Input 
                  type="radio"
                  id="typeChoiceRegular"
                  name="type"
                  value="regular"
                  checked={selectedTopicType === "regular"}
                  onClick={  
                     (selectedTopicType !== "regular") 
                        ? () => handleTopicTypeChange('regular') 
                        : undefined }
                  label={{ htmlFor: "typeChoiceRegular", labelText: "Article" }}
               />
               <Input 
                  type="radio"
                  id="typeChoiceAny"
                  name="type"
                  value="any"
                  checked={selectedTopicType === "any"}
                  onClick={  
                     (selectedTopicType !== "any") 
                        ? () => handleTopicTypeChange('any') 
                        : undefined }
                  label={{ htmlFor: 'typeChoiceAny', labelText: "Peu m'importe" }}
               />
            </div>
            {/* TODO : CHECKBOX HERE */}
            <Input
               type='checkbox'
               name='lockedBy'
               placeholder='Oui ou non ?'
               value={lockedBy}
               onChange={undefined}
               required
               label={{
                  htmlFor: 'lockedBy',
                  labelText: 'Souhaites-tu écrire l\'article toi-même ?',
                  position: 'before',
               }}
            />
            <Button>
               <Input
                  onlyText
                  type='submit'
                  value="Zou, j'envoie !"
               />
            </Button>
      </form>
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
