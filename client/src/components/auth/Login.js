import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../redux/actions/auth'

const Login = ({ login, isAuthenticated }) => {

   const [formData, setFormData] = useState({
      email: '',
      password: ''
   })

   const { email, password } = formData;

   const onChange = e =>
      setFormData({ ...formData, [e.target.name]: e.target.value });

   const onSubmit = async e => {
      e.preventDefault();
      login(email, password);
   };

   //Redirect if logged in
   if (isAuthenticated) {
      return <Redirect to="/dashboard" />
   }

   return (
      <Fragment>
         <div className='form-header'>Connecte-toi</div>
         <form className='form' onSubmit={e => onSubmit(e)} >
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
            <div className='form-group'>
               <label htmlFor='password'>Ton mot de passe complexe&nbsp;:</label>
               <input
                  type='password'
                  name='password'
                  placeholder='Moi1234'
                  value={password}
                  onChange={(e) => onChange(e)}
               />
            </div>
            <div className='form-footer'>
               <input
                  type='submit'
                  value="Zou, je me connecte !"
                  className='button'
               />
            </div>
         </form>
         <p className='gotosignin'>
            Tu n'as pas de compte ? <Link to="/register">Inscrit toi</Link>
         </p>
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