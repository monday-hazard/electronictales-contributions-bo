// This is our root reducer

import { combineReducers } from 'redux';
import alert from './alert';
import article from './article';
import modal from './modal';
import auth from './auth';
import topic from './topic';

export default combineReducers({
   alert,
   article,
   auth,
   modal,
   topic
});