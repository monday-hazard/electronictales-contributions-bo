import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/elements/navbar/Navbar';
import Landing from './components/layout/landing/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import './App.css';
// Provider connects react and redux 
import { Provider } from 'react-redux';
import store from './redux/store'

const App = () =>
   <Provider store={store}>
      <Router>
         <Fragment>
            <Navbar />
            <Route exact path="/" component={Landing} />
            <section className="container">
               <Switch>
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
               </Switch>
            </section>
         </Fragment>
      </Router>
   </Provider>



export default App;
