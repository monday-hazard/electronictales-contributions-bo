import axios from 'axios';
import { setAlert } from './alert';
import {
   GET_TOPICS,
   TOPICS_ERROR
} from './types';

// Get Topics

export const getTopics = () => async dispatch => {
   try {
      const res = await axios.get('/api/topics');

      dispatch({
         type: GET_TOPICS,
         payload: res.data
      });
   } catch (error) {
      dispatch({
         type: TOPICS_ERROR,
         payload: {
            msg: error.response.statusText,
            status: error.response.status
         }
      });
   }
}