import { OPEN_MODAL, CLOSE_MODAL } from '../actions/types';

const initialState = {
   modalContent: '',
   openModal: false
};

export default function (state = initialState, action) {
   const { type } = action;
   switch (type) {
      case OPEN_MODAL:
         return {
            ...state,
            openModal: true,
         };
      case CLOSE_MODAL:
         return {
            ...state,
            openModal: false,
         };
      default:
         return state;
   }
}