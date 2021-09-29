import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { postTopic } from '../../../../redux/actions/topic';
import { setAlert } from '../../redux/actions/alert';
import { Redirect } from 'react-router';

import './TopicForm.css';


const TopicForm = ({ isAuthenticated, postTopic, setAlert }) => {
   const [formData, setFormData] = useState({
      name: '',
      emailContributor: '',
      slackContributor: '',
      type: '',
      lockedBy: ''
   })

   const { name, emailContributor, slackContributor, type, lockedBy } = formData;

   const onChange = (e) =>
      setFormData({ ...formData, [e.target.name]: e.target.value });

   const onSubmit = e => {
      e.preventDefault();
      if ( /*somecondition*/ ) {
         setAlert('Message 😱', 'error')
      } else {
         postTopic({ name, emailContributor, slackContributor, type, lockedBy });

         if (isAuthenticated) {
            // openModal(); In fact, we could open the modal in the dashboard once authenticated :/
            return <Redirect to="/dashboard" />
         } else {
            <Redirect to='/' />
         }
      }
   }

   return (
      <form className='form' onSubmit={e => onSubmit(e)} >
         <div className='name'>
            <label htmlFor='name'>Ton sujet</label>
            <input
               type='text'
               name='name'
               placeholder='Super sujet'
               value={name}
               onChange={(e) => onChange(e)}
               required
            />
         </div>
         <div className='email-contributor'>
            <label htmlFor='emailContributor'>Ton courriel&nbsp;:</label>
            <input
               type='email'
               name='emailContributor'
               placeholder='Ton email'
               value={emailContributor}
               onChange={(e) => onChange(e)}
               required
            />
         </div>
         <div className='slack-contributor'>
            <label htmlFor='slackContributor'>Ton pseudo sur notre slack&nbsp;:</label>
            <input
               type='text'
               name='slackContributor'
               placeholder='Gigi93'
               value={slackContributor}
               onChange={(e) => onChange(e)}
               required
            />
         </div>
         <div className='type'>
            {/* TODO : CHECKBOX HERE */}
            <label htmlFor='type'>Le type de contenu que tu imagines</label>
            <input
               type='text'
               name='type'
               placeholder='Boarf...'
               value={type}
               onChange={(e) => onChange(e)}
               required
            />
         </div>
         <div className='locked-by'>
            {/* TODO : CHECKBOX HERE */}
            <label htmlFor='lockedBy'>
               Souhaites-tu écrire l'article toi-même ?
            </label>
            <input
               type='text'
               name='lockedBy'
               placeholder='Oui ou non ?'
               value={lockedBy}
               onChange={(e) => onChange(e)}
               required
            />
         </div>
         <div className='form-footer'>
            <input
               type='submit'
               value="Zou, j'envoie !"
               className='button'
            />
         </div>
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
