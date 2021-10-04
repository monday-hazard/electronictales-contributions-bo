import {
   GET_TOPICS,
   TOPICS_ERROR,
   DELETE_TOPIC,
   POST_TOPIC
} from '../actions/types';

const initialState = {
   topics: [],
   topic: null,
   loading: true,
   error: {}
}

// eslint-disable-next-line
export default function (state = initialState, action) {
   const { type, payload } = action;

   switch (type) {
      case GET_TOPICS:
         return {
            ...state,
            topics: payload,
            loading: false
         };
      case POST_TOPIC:
         return {
            ...state,
            topics: [...state.topics, payload], // add the new topic to the topics stored in the state
            loading: false
         }
      case DELETE_TOPIC:
         return {
            ...state,
            topic: state.topics.filter(topic => topic._id !== payload),
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