import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../../redux/actions/auth';
import { setAlert } from '../../redux/actions/alert';

import Input from '../elements/input/Input';
import Modal from '../elements/modal/Modal';
import TitleSection from '../elements/page-section/title-section/TitleSection';

import { REGISTER_SUCCESS_MODAL_CONTENT } from '../../dictionnary/modalContentList';
import { REGISTER_ERROR_ALERT_CONTENT } from '../../dictionnary/alertContentList';

import { passwordCheckingRegex, emailCheckingRegex } from '../../utils/regex';

import './Form.css';
import './Register.css';

const Register = ({ setAlert, register }) => {
   const [formData, setFormData] = useState({
      userName: '',
      email: '',
      slackname: '',
      password: '',
      confirm_password: '',
   });
   const { userName, email, slackname, password, confirm_password } = formData;
   const [userNameNotValid, setUserNameNotValid] = useState(undefined);
   const [emailNotValid, setEmailNotValid] = useState(undefined);
   const [passwordNotStrong, setPasswordNotStrong] = useState(undefined);
   const [unmatchingPasswords, setUnmatchingPasswords] = useState(undefined);

   const onChange = (e) => {
      switch (e.target.name) {
         case 'userName':
            e.target.value = e.target.value.trim();
            e.target.value.length >= 2
               ? setUserNameNotValid(false)
               : setUserNameNotValid(true);
            break;
         case 'email':
            e.target.value = e.target.value.trim();
            emailCheckingRegex.test(e.target.value)
               ? setEmailNotValid(false)
               : setEmailNotValid(true);
            break;
         case 'password':
            passwordCheckingRegex.test(e.target.value)
               ? setPasswordNotStrong(false)
               : setPasswordNotStrong(true);
            break;
         case 'confirm_password':
            password !== e.target.value
               ? setUnmatchingPasswords(true)
               : setUnmatchingPasswords(false);
         case 'slackname':
            e.target.value = e.target.value.trim();
         default:
            break;
         }

      setFormData({ ...formData, [e.target.name]: e.target.value });
   }

   const onSubmit = e => {
      e.preventDefault();
      const formErrors = userNameNotValid || emailNotValid || passwordNotStrong || unmatchingPasswords;
      if (formErrors) {
         setAlert(
            REGISTER_ERROR_ALERT_CONTENT.message,
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
               <TitleSection title="S'inscrire" subtitle="Inscris-toi et crée ton espace personnel" />
               <form className='form' onSubmit={e => onSubmit(e)} >
                  <Input
                     required
                     label={{ className: "picto account-picto", position: "before" }}
                     className={'input-form'
                        + `${userNameNotValid === undefined ? ''
                           : userNameNotValid ? ' invalid-input' : ' valid-input'}`}
                     type='text'
                     name='userName'
                     placeholder="Ton pseudo *"
                     value={userName}
                     onChange={(e) => onChange(e)}
                     minLength={2}
                  />
                  {userNameNotValid && (
                     <span className="error-label">Le username n'est pas valide</span>
                  )}
                  <Input
                     required
                     label={{ className: "picto email-picto", position: "before" }}
                     className={'input-form'
                        + `${emailNotValid === undefined ? ''
                           : emailNotValid ? ' invalid-input' : ' valid-input'}`}
                     type='email'
                     name='email'
                     placeholder='Ton email *'
                     value={email}
                     onChange={(e) => onChange(e)}
                  />
                  {emailNotValid && (
                     <span className="error-label">L'email n'est pas valide</span>
                  )}
                  <Input
                     label={{ className: "picto slack-picto", position: "before" }}
                     className='input-form'
                     type='text'
                     name='slackname'
                     placeholder='Ton pseudo sur notre slack ?'
                     value={slackname}
                     onChange={(e) => onChange(e)}
                  />
                  <Input
                     label={{ className: "picto password-picto", position: "before" }}
                     className={'input-form'
                        + `${passwordNotStrong === undefined ? ''
                           : passwordNotStrong ? ' invalid-input' : ' valid-input'}`
                     }
                     type='password'
                     name='password'
                     placeholder='Un mot de passe *'
                     value={password}
                     onChange={(e) => onChange(e)}
                  />
                  {passwordNotStrong && (
                     <span className="error-label">Le mot de passe n'est pas assez fort</span>
                  )}
                  <Input
                     required
                     label={{ className: "picto validate-picto", position: "before" }}
                     className={'input-form'
                        + `${unmatchingPasswords === undefined ? ''
                           : unmatchingPasswords ? ' invalid-input' : ' valid-input'}`
                     }
                     type='password'
                     name='confirm_password'
                     placeholder='Confirme ton mot de passe *'
                     value={confirm_password}
                     onChange={(e) => onChange(e)}
                  />
                  {unmatchingPasswords && (
                     <span className="error-label">Les mots de passe ne correspondent pas</span>
                  )}
                  <Input
                     type='submit'
                     value="Zou, je m'inscris !"
                     className='btn-form'
                  />
               </form>
            </div>
            <p className='go-to-signin'>
               Déjà inscrit·e ? <Link to="/login">Connecte-toi</Link>
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