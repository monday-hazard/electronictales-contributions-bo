import uuid from 'uuid/v4';
import { SET_ALERT, REMOVE_ALERT } from "./types";

// TODO : set timeout back to 5000 (other value is for dev)
export const setAlert = (msg, alertType, timeout = 1000000) => dispatch => {
   const id = uuid();
   dispatch({
      type: SET_ALERT,
      payload: { msg, alertType, id }
   });

   setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
}