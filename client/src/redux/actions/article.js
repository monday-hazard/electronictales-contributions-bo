import axios from 'axios';
import { setAlert } from './alert';
import { GET_ARTICLES, ARTICLES_ERROR } from './types';

// Get Articles of one User
export const getArticlesByUser = (userId) => async (dispatch) => {
    try {
        const res = await axios.get(`api/articles/user/${userId}`);

        dispatch({
            type: GET_ARTICLES,
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: ARTICLES_ERROR,
            payload: {
                msg: error.response.statusText,
                status: error.response.status,
            },
        });
    }
};
