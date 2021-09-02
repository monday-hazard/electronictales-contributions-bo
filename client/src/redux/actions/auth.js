

import axios from 'axios';
import { setAlert } from "./alert";

import {
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from './types';

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