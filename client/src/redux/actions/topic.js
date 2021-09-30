import axios from 'axios';
import { setAlert } from './alert';
import {
   GET_TOPICS,
   TOPICS_ERROR,
   DELETE_TOPIC,
   POST_TOPIC
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

// Delete topic
export const deleteTopic = id => async dispatch => {
   try {
      await axios.delete(`/api/topics/${id}`);

      dispatch({
         type: DELETE_TOPIC,
         payload: id
      });

      dispatch(setAlert('Topic has been removed', 'success'));

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

// Post topic
export const postTopic = formData => async dispatch => {
   const config = {
      headers: {
         'Content-Type': 'application/json'
      }
   }

   try {
      const res = await axios.post(`/api/topics`, formData, config);

      dispatch({
         type: POST_TOPIC,
         payload: res.data
      });

      dispatch(setAlert('Topic created', 'success'));

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