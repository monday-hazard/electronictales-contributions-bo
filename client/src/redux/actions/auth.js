import axios from 'axios';
import { setAlert } from "./alert";
import { openModal } from './modal';
import {
   REGISTER_SUCCESS,
   REGISTER_FAIL,
   USER_LOADED,
   AUTH_ERROR,
   LOGIN_SUCCESS,
   LOGIN_FAIL,
   LOGOUT
} from './types';
import setAuthToken from '../../utils/setAuthToken';

import { REGISTER_ERROR_FAIL_ALERT_CONTENT } from '../../dictionnary/alertContentList';

// Load user (check localStorage for user token)
export const loadUser = () => async dispatch => {
   if (localStorage.token) {
      setAuthToken(localStorage.token);
   }

   try {
      const res = await axios.get('/api/auth');

      dispatch({
         type: USER_LOADED,
         payload: res.data
      });
   } catch (error) {

      dispatch({
         type: AUTH_ERROR
      })
   }
}

// Register User
export const register = ({ userName, slackName, email, password }) => async dispatch => {
   const config = {
      headers: {
         'Content-Type': 'application/json'
      }
   }
   const body = JSON.stringify({ userName, slackName, email, password });
   try {
      // eslint-disable-next-line
      const res = await axios.post('/api/users', body, config);
      dispatch({
         type: REGISTER_SUCCESS
      })
      dispatch(openModal());

   } catch (err) {
      const errors = err.response.data.errors;
      if (errors && err.response.status !== 500) {
         errors.forEach(error => dispatch(setAlert(error.msg, 'error')));
      }
      else { // Error 500 case
         dispatch(setAlert(REGISTER_ERROR_FAIL_ALERT_CONTENT.message, 'error'));
      }
      dispatch({
         type: REGISTER_FAIL
      })
   }
}

export const login = (email, password) => async dispatch => {
   const config = {
      headers: {
         'Content-Type': 'application/json'
      }
   }
   const body = JSON.stringify({ email, password });
   try {
      const res = await axios.post('/api/auth', body, config);

      dispatch({
         type: LOGIN_SUCCESS,
         payload: res.data
      })

      dispatch(loadUser());

   } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
         errors.forEach(error => dispatch(setAlert(error.msg, 'error')));
      }
      dispatch({
         type: LOGIN_FAIL
      });
   }
};

// Logout / Clear profile
export const logout = () => dispatch => {
   dispatch({ type: LOGOUT })
}