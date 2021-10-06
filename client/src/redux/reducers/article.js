import { GET_ARTICLES, ARTICLES_ERROR } from '../actions/types';

const initialState = {
    articles: [],
    article: null,
    loading: true,
    error: {},
};

// eslint-disable-next-line
export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_ARTICLES:
            return {
                ...state,
                articles: payload,
                loading: false,
            };
        case ARTICLES_ERROR:
            return {
                ...state,
                error: payload,
                loading: false,
            };
        default:
            return state;
    }
}
