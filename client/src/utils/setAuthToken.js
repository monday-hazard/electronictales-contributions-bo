import api from '../utils/api';

// What I do : add a global header so when we have a token, we send it with every request
const setAuthToken = token => {
   if (token) {
      api.defaults.headers.common['x-auth-token'] = token;
   } else {
      delete api.defaults.headers.common['x-auth-token'];
   }
}

export default setAuthToken;