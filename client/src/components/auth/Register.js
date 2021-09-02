import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../elements/modal/Modal';
import { connect } from 'react-redux';
import { openModal } from '../../redux/actions/modal';
import { setAlert } from '../../redux/actions/alert';
import { register } from '../../redux/actions/auth';
import { REGISTER_MODAL_CONTENT } from '../../dictionnary/modalContentList';

const Register = ({ openModal, setAlert, register }) => {
   const [formData, setFormData] = useState({
      username: '',
      email: '',
      slackname: '',
      password: '',
      confirm_password: '',
   });

   const { username, email, slackname, password, confirm_password } = formData;

   const onChange = (e) =>
      setFormData({ ...formData, [e.target.name]: e.target.value });

   const onSubmit = e => {
      e.preventDefault();
      if (password !== confirm_password) {
         setAlert('Your passwords don\'t match 😱', 'error')
      } else {
         register( { username, slackname, email, password } );
         openModal();
      }
   }

   return (
      <Fragment>
         <div className='form-header'>Inscris-toi</div>
         <form className='form' onSubmit={e => onSubmit(e)} >
            <div className='form-group'>
               <label htmlFor='username'>Ton nom préféré (ce sera ton nom d'utilisateur&#xB7;ice)&nbsp;:</label>
               <input
                  type='text'
                  name='username'
                  placeholder='captainAnonymous'
                  value={username}
                  onChange={(e) => onChange(e)}
               />
            </div>
            <div className='email'>
               <label htmlFor='email'>Ton courriel&nbsp;:</label>
               <input
                  type='email'
                  name='email'
                  placeholder='email'
                  value={email}
                  onChange={(e) => onChange(e)}
               />
            </div>
            <div className='slackname'>
               <label htmlFor='slackname'>Ton pseudo sur notre slack&nbsp;:</label>
               <input
                  type='text'
                  name='slackname'
                  placeholder='Gigi93'
                  value={slackname}
                  onChange={(e) => onChange(e)}
               />
            </div>
            <div className='form-group'>
               <label htmlFor='password'>Un mot de passe complexe&nbsp;:</label>
               <input
                  type='password'
                  name='password'
                  placeholder='Moi1234'
                  value={password}
                  onChange={(e) => onChange(e)}
               />
            </div>
            <div className='form-group'>
               <label htmlFor='confirm_password'>
                  Sauras-tu confirmer ton mot de passe&nbsp;?
               </label>
               <input
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
                  className='button'
               />
            </div>
         </form>
         <Modal content={REGISTER_MODAL_CONTENT} />
      </Fragment>
   );
};

Register.propTypes = {
   openModal: PropTypes.func.isRequired,
   setAlert: PropTypes.func.isRequired,
   register: PropTypes.func.isRequired
}

export default connect(null, { openModal, setAlert, register })(Register);