import {
   GET_TOPICS,
   TOPICS_ERROR
} from '../actions/types';

const initialState = {
   topics: [],
   topic: null,
   loading: true,
   error: {}
}

export default function (state = initialState, action) {
   const { type, payload } = action;

   switch (type) {
      case GET_TOPICS:
         return {
            ...state,
            topics: payload,
            loading: false,

         };
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