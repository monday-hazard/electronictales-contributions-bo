// This is our root reducer

import { combineReducers } from 'redux';
import alert from './alert';
import modal from './modal';
import auth from './auth';
import topic from './topic';

export default combineReducers({
   alert,
   auth,
   modal,
   topic
});