import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Alert from '../elements/alert/Alert';
import Dashboard from '../layout/dashboard/Dashboard';
import PrivateRoute from './PrivateRoute';
import PostTopic from '../layout/post-topic/PostTopic';

const Routes = () => {
   return (
      <div>
         <Alert />
         <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <Route exact path="/post-topic" component={PostTopic} />
         </Switch>
      </div>
   );
};

export default Routes;
