import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../elements/modal/Modal';
import { connect } from 'react-redux';
import { openModal, setModalContent } from '../../redux/actions/modal';



const Register = ({ openModal, setModalContent }) => {
   const [formData, setFormData] = useState({
      username: '',
      email: '',
      slackname: '',
      password: '',
      confirm_password: '',
   });

   const { username, email, slackname, password, confirm_password } = formData;

   const modalContent = {
      title: 'Félicitations, tu es quasiment inscrit·e !',
      body: 'Va voir dans ta boîte aux lettres 👣 📬, nous t\'avons envoyé un email   📯 Clique sur le lien pour confirmer ton adresse et zou, tu es inscrit·e.'
   }

   const onChange = (e) =>
      setFormData({ ...formData, [e.target.name]: e.target.value });

   const onSubmit = e => {
      e.preventDefault();
      if (password !== confirm_password) {
         console.log('Your passwords don\'t match 😱')
      } else {
         console.log("openModal : ", openModal);
         // TODO : learn how to do the asynchronous way and set the POST request logic
         setModalContent(modalContent);
         openModal();
      }
   }

   return (
      <Fragment>
         <div className='form-header'>Login</div>
         <form className='form' onSubmit={e => onSubmit(e)} >
            <div className='form-group'>
               <label htmlFor='username'>Ton nom préféré (ce sera ton nom d'utilisateur&#xB7;ice)&nbsp;:</label>
               <input
                  type='text'
                  name='username'
                  placeholder='captainAnonymous'
                  value={username}
                  onChange={(e) => onChange(e)}
                  required
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
                  required
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
                  required
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
                  required
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
         <Modal />
      </Fragment>
   );
};

Register.propTypes = {
   openModal: PropTypes.func.isRequired,
   setModalContent: PropTypes.func.isRequired,
}

export default connect(null, { openModal, setModalContent })(Register);
