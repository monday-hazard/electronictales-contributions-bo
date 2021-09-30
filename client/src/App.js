import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/layout/landing/Landing';
import Dashboard from './components/layout/dashboard/Dashboard';
import PostTopic from './components/layout/post-topic/PostTopic';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

import Alert from './components/elements/alert/Alert';
import Navbar from './components/elements/navbar/Navbar';

import './App.css';

// Redux
import { Provider } from 'react-redux';
import store from './redux/store';
import { loadUser } from './redux/actions/auth';
import setAuthToken from './utils/setAuthToken';

import './App.css';

if (localStorage.token) {
   setAuthToken(localStorage.token);
}

const App = () => {
   useEffect(() => {
      store.dispatch(loadUser());
   }, []); // equivalent to componentDidMount because of the []

   return (
      <Provider store={store}>
         <Router>
            <Fragment>
               <Navbar />
               <Route exact path="/" component={Landing} />
               <div className="container">
                  <Alert />
                  <Switch>
                     <Route exact path="/register" component={Register} />
                     <Route exact path="/login" component={Login} />
                     <Route exact path="/dashboard" component={Dashboard} />
                     <Route exact path="/post-topic" component={PostTopic} />
                  </Switch>
               </div>
            </Fragment>
         </Router>
      </Provider>
   )
}

export default App;
