import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import Modal from '../elements/modal/Modal';
import { connect } from 'react-redux';
import { openModal } from '../../redux/actions/modal';
import { setAlert } from '../../redux/actions/alert';
import { register } from '../../redux/actions/auth';
import { REGISTER_MODAL_CONTENT } from '../../dictionnary/modalContentList';

import './Form.css';

const Register = ({ isAuthenticated, openModal, setAlert, register }) => {
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
         setAlert('Your passwords don\'t match 😱', 'error')
      } else {
         register({ userName, slackname, email, password });
      }
   }

   if (isAuthenticated) {
      // openModal(); In fact, we could open the modal in the dashboard once authenticated :/
      return <Redirect to="/dashboard" />
   }

   return (
      <Fragment>
         <div className='form-container'>
            <div className='form-wrapper'>
               <div className='form-header-title'>S'inscrire</div>
               <div className='form-header-subtitle'>Inscris-toi et créé ton espace personnel</div>
               <form className='form-login' onSubmit={e => onSubmit(e)} >
                  <div className='form-group'>
                     <input
                     className='input-form'
                        type='text'
                        name='userName'
                        placeholder="Ton nom d'utilisateur préféré"
                        value={userName}
                        onChange={(e) => onChange(e)}
                     />
                  </div>
                  <div className='email'>
                     <input
                        className='input-form'
                        type='email'
                        name='email'
                        placeholder='Ton Mail'
                        value={email}
                        onChange={(e) => onChange(e)}
                     />
                  </div>
                  <div className='slackname'>
                     <input
                        className='input-form'
                        type='text'
                        name='slackname'
                        placeholder='Ton pseudo sur notre forum Slack'
                        value={slackname}
                        onChange={(e) => onChange(e)}
                     />
                  </div>
                  <div className='form-group'>
                     <input
                        className='input-form'
                        type='password'
                        name='password'
                        placeholder='Un mot de passe complexe'
                        value={password}
                        onChange={(e) => onChange(e)}
                     />
                  </div>
                  <div className='form-group'>
                     <input
                        className='input-form'
                        type='password'
                        name='confirm_password'
                        placeholder='Le même mot de passe (si, si)'
                        value={confirm_password}
                        onChange={(e) => onChange(e)}
                     />
                  </div>
                  <div className='form-footer'>
                     <input
                        type='submit'
                        value="Zou, je m'inscris !"
                        className='btn-form'
                     />
                  </div>
               </form>
            </div>
         </div>
         <p className='go-to-signin'>
            Déjà inscrit ? <Link to="/login">Connecte toi</Link>
         </p>
         <Modal content={REGISTER_MODAL_CONTENT} />
      </Fragment>
   );
};

Register.propTypes = {
   openModal: PropTypes.func.isRequired,
   setAlert: PropTypes.func.isRequired,
   register: PropTypes.func.isRequired,
   isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
   isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { openModal, setAlert, register })(Register);