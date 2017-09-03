import React, {PropTypes} from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import UsersPage from '../user/UsersPage';
import Authorizer from '../authorizer/authorizer';
import PrivateRoute from '../authorizer/privateRoute';
import App from '../App';

const Main = () => {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" render={() => <h2>Home page2</h2>}/>
        <PrivateRoute path="/users" component={UsersPage} authenticated={false}/>
        <Route path="/login" render={() => (<h2>Login</h2>)}/>
      </Switch>
    </div>
  );
};

export default Main;
