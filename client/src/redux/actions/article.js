import axios from 'axios';
import { setAlert } from './alert';
import { openModal } from './modal';
import { POST_ARTICLE, ARTICLE_ERROR } from './types';

// TODO : send auth as well ?
export const postArticle = formData => async dispatch => {
   const config = {
      headers: {
         'Content-Type': 'application/json'
      }
   }

   try {
      const res = await axios.post(`/api/articles`, formData, config);

      dispatch({
         type: POST_ARTICLE,
         payload: res.data
      });
      dispatch(openModal());

   } catch (error) {
      dispatch({
         type: ARTICLE_ERROR,
         payload: {
            msg: error.response.statusText,
            status: error.response.status
         }
      });
      dispatch(setAlert(
         'There was a problem while posting the article',
         'error'
      ));
   }
}