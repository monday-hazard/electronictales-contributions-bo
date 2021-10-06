import { POST_ARTICLE, ARTICLE_ERROR } from '../actions/types';

const initialState = {
   article: null,
   loading: true,
   error: {}
}

// eslint-disable-next-line
export default function (state = initialState, action) {
   const { type, payload } = action;

   switch (type) {
      case POST_TOPIC:
         return {
            ...state,
            article: payload, // add the new topic to the topics stored in the state
            loading: false
         }
      case TOPICS_ERROR:
         return {
            ...state,
            error: payload,
            loading: false
         };
      default:
         return state;
   }
}