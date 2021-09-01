import { SET_MODAL, REMOVE_MODAL } from '../actions/types';
const initialState = [];

export default function (state = initialState, action) {
   const { type, payload } = action;

   switch (type) {
      case SET_MODAL:
         // Copy whatever is in the state at the moment and add the new modal
         return [...state, payload];
      case REMOVE_MODAL:
         // Return the state array and only remove the specific modal
         return state.filter(modal => modal.id !== payload);
      default:
         return state;
   }
}