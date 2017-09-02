import React, {PropTypes} from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import UsersPage from '../user/UsersPage';
import Authorizer from '../authorizer/authorizer';
import PrivateRoute from '../authorizer/privateRoute';
import App from '../App';

const homePage = () => {
    return (<h2>Home page2</h2>);
};

const Main = () => {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" render={homePage}/>
        <PrivateRoute path="/users" component={UsersPage} authenticated/>
        <Route path="/login" render={() => (<h2>Login</h2>)}/>
      </Switch>
    </div>
  );
};

export default Main;
