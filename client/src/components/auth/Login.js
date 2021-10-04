import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../redux/actions/auth';

import './Form.css';

import TitleSection from '../elements/page-section/title-section/TitleSection';
import Input from '../elements/input/Input';

const Login = ({ login, isAuthenticated }) => {

   const [formData, setFormData] = useState({
      email: '',
      password: ''
   })

   const { email, password } = formData;

   const onChange = e => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   }

   const onSubmit = async e => {
      e.preventDefault();
      login(email, password);
   };

   const [rememberMe, setRemeberMer] = React.useState(false);
   const rememberMeAfterLogin = () => {
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
               <TitleSection title="Se connecter" subtitle="Connecte-toi pour accéder à ton espace personnel" />
               <form className='form' onSubmit={e => onSubmit(e)} >
                  <Input
                     label={{ className: "picto email-picto", position: "before" }}
                     className='input-form'
                     type='email'
                     name='email'
                     placeholder='Email'
                     value={email}
                     onChange={(e) => onChange(e)}
                     required
                  />
                  <Input
                     label={{ className: "picto password-picto", position: "before" }}
                     className='input-form'
                     type='password'
                     name='password'
                     placeholder='Password'
                     value={password}
                     onChange={(e) => onChange(e)}
                     required
                  />
                  <Input
                     label={{ position: "before", labelText: "Se souvenir de moi", className: "text-checkbox-remember-me" }}
                     className='btn-checkbox-remember-me'
                     type="checkbox"
                     checked={rememberMe}
                     onChange={rememberMeAfterLogin}
                  />
                  <Input
                     type='submit'
                     value="Zou, je me connecte !"
                     className='btn-form'
                  />
               </form>
            </div>
            <p className='go-to-signin'>
               Tu n'as pas de compte ? <Link to="/register">Inscris-toi</Link>
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