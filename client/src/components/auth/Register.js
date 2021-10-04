import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../../redux/actions/auth';
import { setAlert } from '../../redux/actions/alert';

import Modal from '../elements/modal/Modal';
import Input from '../elements/input/Input';
import TitleSection from '../elements/page-section/title-section/TitleSection';

import { REGISTER_SUCCESS_MODAL_CONTENT } from '../../dictionnary/modalContentList';
import { REGISTER_ERROR_PASSWORD_ALERT_CONTENT } from '../../dictionnary/alertContentList';

import './Form.css';

const Register = ({ setAlert, register }) => {
   const [formData, setFormData] = useState({
      userName: '',
      email: '',
      slackname: '',
      password: '',
      confirm_password: '',
   });

   const { userName, email, slackname, password, confirm_password } = formData;

   const onChange = (e) =>
      setFormData({ ...formData, [e.target.name]: e.target.value });

   const onSubmit = e => {
      e.preventDefault();
      if (password !== confirm_password) {
         setAlert(
            REGISTER_ERROR_PASSWORD_ALERT_CONTENT.message,
            'error'
         );
      } else {
         register({ userName, slackname, email, password });
      }
   }

   return (
      <>
         <section className='form-container'>
            <div className='form-wrapper'>
               <TitleSection title="S'inscrire" subtitle="Inscris-toi et crée ton espace personnel"/>
               <form className='form' onSubmit={e => onSubmit(e)} >
                  <Input
                     label={{className: "picto account-picto", position: "before"}}
                     className='input-form'
                     type='text'
                     name='userName'
                     placeholder="username"
                     value={userName}
                     onChange={(e) => onChange(e)}
                     required
                  />
                  <Input
                     label={{className: "picto email-picto", position: "before"}}
                     className='input-form'
                     type='email'
                     name='email'
                     placeholder='email'
                     value={email}
                     onChange={(e) => onChange(e)}
                     required
                  />
                  <Input
                     label={{className: "picto slack-picto", position: "before"}}
                     className='input-form'
                     type='text'
                     name='slackname'
                     placeholder='slackname'
                     value={slackname}
                     onChange={(e) => onChange(e)}
                  />
                  <Input
                     label={{className: "picto password-picto", position: "before"}}
                     className='input-form'
                     type='password'
                     name='password'
                     placeholder='password'
                     value={password}
                     onChange={(e) => onChange(e)}
                     required
                  />
                  <Input
                     label={{className: "picto validate-picto", position: "before"}}
                     className='input-form'
                     type='password'
                     name='confirm_password'
                     placeholder='confirm password'
                     value={confirm_password}
                     onChange={(e) => onChange(e)}
                     required
                  />
                  <Input
                     type='submit'
                     value="Zou, je m'inscris !"
                     className='btn-form'
                  />
               </form>
            </div>
            <p className='go-to-signin'>
               Déjà inscrit ? <Link to="/login">Connecte toi</Link>
            </p>
         </section>
         <Modal
            content={REGISTER_SUCCESS_MODAL_CONTENT}
            redirectPath='/login'
         />
      </>
   );
};

Register.propTypes = {
   setAlert: PropTypes.func.isRequired,
   register: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
   isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { setAlert, register })(Register);