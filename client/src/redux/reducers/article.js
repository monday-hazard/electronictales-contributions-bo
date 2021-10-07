import { GET_ARTICLES_BY_USER, ARTICLES_ERROR } from '../actions/types';

const initialState = {
    articles: [],
    articlesByUser: [],
    article: null,
    loading: true,
    error: {},
};

// eslint-disable-next-line
export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_ARTICLES_BY_USER:
            return {
                ...state,
                articlesByUser: payload,
                loading: false,
            };
        case ARTICLES_ERROR:
            return {
                ...state,
                error: payload,
                loading: false,
            };
        // TODO (Monday-Hazard) POST_ARTICLE
        // TODO (Monday-Hazard) ARTICLE_ERROR
        default:
            return state;
    }
}
