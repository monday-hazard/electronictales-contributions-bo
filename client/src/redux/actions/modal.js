import uuid from 'uuid/v4';
import { SET_MODAL, REMOVE_MODAL } from "./types";


// Dispatch: comes from thunk middleware: allows us to dispatch more than one action type from setModa() function
export const setModal = (msg, modalType) => dispatch => {
   const id = uuid();
   dispatch({
      type: SET_MODAL,
      payload: { msg, modalType, id }
   });

   // TODO: find a way to remove the modal with a dispatch when click on it 
};