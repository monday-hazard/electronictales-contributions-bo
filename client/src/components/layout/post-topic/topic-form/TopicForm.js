import React, { useState } from 'react';
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
      type: '',
      lockedBy: ''
   })
   const [selectedTopicType, selectTopicType] = useState('any');
   const { name, emailContributor, slackContributor, type, lockedBy } = formData;

   const onChange = (e) =>
      setFormData({ ...formData, [e.target.name]: e.target.value });

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

   const handleTopicTypeChange = (selectedTopicType) => {
      selectTopicType(selectedTopicType);
      console.log('topic type is set to:', selectedTopicType);
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
               required
            />
            <label htmlFor="type">
               Le type de contenu que tu imagines
            </label>
            <div className="topic-type-choice-group">
               <Input
                  type="radio"
                  id="typeChoiceTLTA"
                  name="type"
                  value="TLTA"
                  checked={selectedTopicType === "TLTA"}
                  // onChange={handleTopicTypeChange("TLTA")}
                  label={{ htmlFor: "typeChoiceTLTA", labelText: "TLTA" }}
               />
               <Input 
                  type="radio"
                  id="typeChoiceRegular"
                  name="type"
                  value="regular"
                  checked={selectedTopicType === "regular"}
                  // onChange={handleTopicTypeChange("regular")}
                  label={{ htmlFor: "typeChoiceRegular", labelText: "Regular" }}
               />
               <Input 
                  type="radio"
                  id="typeChoiceAny"
                  name="type"
                  value="any"
                  checked={selectedTopicType === "any"}
                  // onChange={handleTopicTypeChange("any")}
                  label={{ htmlFor: 'typeChoiceAny', labelText: 'Any' }}
               />
            </div>
            {/* TODO : CHECKBOX HERE */}
            <Input
               type='text'
               name='lockedBy'
               placeholder='Oui ou non ?'
               value={lockedBy}
               onChange={(e) => onChange(e)}
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
