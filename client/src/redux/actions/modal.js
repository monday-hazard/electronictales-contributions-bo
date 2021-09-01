import { SET_MODAL, REMOVE_MODAL } from "./types";
import uuid from 'uuid';

// Dispatch: comes from thunk middleware: allows us to dispatch more than one action type from setModa() function
export const setModal = (msg, modalType) => dispatch => {
   const id = uuid.v4();
   dispatch({
      type: SET_MODAL,
      payload: { msg, modalType, id }
   })
};