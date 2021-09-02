import { OPEN_MODAL, CLOSE_MODAL } from './types';

// Dispatch: comes from thunk middleware: allows us to dispatch more than one action type from setModa() function

export const openModal = () => (dispatch) => {
   dispatch({
      type: OPEN_MODAL
   });
};

export const closeModal = () => (dispatch) => {
   dispatch({
      type: CLOSE_MODAL
   });
};