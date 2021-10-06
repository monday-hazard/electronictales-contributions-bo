import axios from 'axios';

import { setAlert } from './alert';
import { openModal } from './modal';

import { GET_ARTICLES, ARTICLES_ERROR } from './types';
import { POST_ARTICLE, ARTICLE_ERROR } from './types';

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

// TODO : send auth as well ?
export const postArticle = (formData) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    try {
        const res = await axios.post(`/api/articles`, formData, config);

        dispatch({
            type: POST_ARTICLE,
            payload: res.data,
        });
        dispatch(openModal());
    } catch (error) {
        dispatch({
            type: ARTICLE_ERROR,
            payload: {
                msg: error.response.statusText,
                status: error.response.status,
            },
        });
        dispatch(
            setAlert('There was a problem while posting the article', 'error')
        );
    }
};
