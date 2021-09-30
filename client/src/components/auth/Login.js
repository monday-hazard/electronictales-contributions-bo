import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../redux/actions/auth';

import './Form.css';

import { check, checkSchema } from 'express-validator';
import TitleSection from '../elements/page-section/title-section/TitleSection';

const Login = ({ login, isAuthenticated }) => {

   const [formData, setFormData] = useState({
      email: '',
      password: ''
   })

   const { email, password } = formData;

   const onChange = e =>{
      setFormData({ ...formData, [e.target.name]: e.target.value });
   }

   const onSubmit = async e => {
      e.preventDefault();
      login(email, password);
      console.log(formData)
      console.log(e)
   };

   const [rememberMe, setRemeberMer] = React.useState(false);
   const rememberMeAfterLogin =  () => {
      setRemeberMer(!rememberMe)
   } 

   //Redirect if logged in
   if (isAuthenticated) {
      return <Redirect to="/dashboard" />
   }

   return (
      <Fragment>
         <section className='form-container'>
            <div className='form-wrapper'>
               <TitleSection title="Se connecter" subtitle="Connecte-toi pour accéder à ton espace personnel"/>
               <form className='form' onSubmit={e => onSubmit(e)} >
                  <div className='input-container email'>
                     <label className="picto email-picto">
                     <input
                        className='input-form'
                        type='email'
                        name='email'
                        placeholder='email'
                        value={email}
                        onChange={(e) => onChange(e)}
                     />
                     </label>
                  </div>
                  <div className='input-container form-group'>
                     <label className="picto password-picto">
                     <input
                        className='input-form'
                        type='password'
                        name='password'
                        placeholder='password'
                        value={password}
                        onChange={(e) => onChange(e)}
                     />
                     </label>
                  </div>
                  <div>
                     <label className='checkbox-container'>
                        <input className='btn-checkbox-remember-me' 
                        type="checkbox"
                        checked={rememberMe}
                        onChange={rememberMeAfterLogin}
                        />
                        <span class="checkmark"></span>
                        <div className='text-checkbox-remember-me'>Se souvenir de moi</div>
                     </label>
                  </div>
                  <div className='form-footer'>
                     
                     <input
                        type='submit'
                        value="Zou, je me connecte !"
                        className='btn-form'
                     />
                  </div>
               </form>
            </div>
            <p className='go-to-signin'>
               Tu n'as pas de compte ? <Link to="/register">Inscris toi</Link>
            </p>
         </section>
      </Fragment>
   );
}

Login.propTypes = {
   login: PropTypes.func.isRequired,
   isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
   isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(Login);