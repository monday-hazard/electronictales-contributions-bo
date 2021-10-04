import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/layout/landing/Landing';
import Routes from './components/routing/Routes';
import Navbar from './components/layout/navbar/Navbar';


import './App.css';

// Redux
import { Provider } from 'react-redux';
import store from './redux/store';
import { loadUser } from './redux/actions/auth';
import setAuthToken from './utils/setAuthToken';
import './App.css';
import Footer from './components/layout/footer/Footer';

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
               <Switch>
                  <Route exact path="/" component={Landing} />
                  <Route component={Routes} />
               </Switch>
               <Footer />
            </Fragment>
         </Router>
      </Provider>
   )
}

export default App;
