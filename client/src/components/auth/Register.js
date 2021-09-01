import React, { Fragment, useState } from 'react';

const Register = () => {
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
         console.log("Your passwords don't match :/")
      } else {
         console.log(formData);
      }
   }

   return (
      <Fragment>
         <div className='form-header'>Login</div>
         <form className='form' onSubmit={e => onSubmit(e)} >
            <div className='form-group'>
               <label htmlFor='username'>Ton nom préféré</label>
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
               <label htmlFor='email'>Ton courriel</label>
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
               <label htmlFor='slackname'>Ton pseudo sur notre slack</label>
               <input
                  type='text'
                  name='slackname'
                  placeholder='Gigi93'
                  value={slackname}
                  onChange={(e) => onChange(e)}
               />
            </div>
            <div className='form-group'>
               <label htmlFor='password'>Password</label>
               <input
                  type='password'
                  name='password'
                  placeholder='password'
                  value={password}
                  onChange={(e) => onChange(e)}
                  required
               />
            </div>
            <div className='form-group'>
               <label htmlFor='confirm_password'>
                  Confirme ton mot de passe, stp
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
      </Fragment>
   );
};

export default Register;
