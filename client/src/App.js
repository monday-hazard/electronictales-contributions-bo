import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/elements/navbar/Navbar';
import Landing from './components/layout/landing/Landing';
import './App.css';

const App = () =>
   <div className="App">
      <Router>
         <Fragment>
            <Navbar />
            <Landing />
            <Route exact path="/" />
         </Fragment>
      </Router>
   </div>



export default App;
