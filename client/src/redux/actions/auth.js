import axios from 'axios';
import { setAlert } from "./alert";
import {
   REGISTER_SUCCESS,
   REGISTER_FAIL,
   USER_LOADED,
   AUTH_ERROR
} from './types';
import setAuthToken from '../../utils/setAuthToken';

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
      const res = await axios.post('/api/users', body, config);
      dispatch({
         type: REGISTER_SUCCESS,
         payload: res.data
      })
   } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
         errors.forEach(error => dispatch(setAlert(error.msg, 'error')));
      }
      dispatch({
         type: REGISTER_FAIL
      })
   }

}