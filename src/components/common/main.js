import React, {PropTypes} from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import UsersPage from '../user/UsersPage';
import LoginPage from '../login/loginPage';
import LogoutPage from '../logout/logoutPage';
import ResetPasswordPage from '../passwordReset/passwordResetPage';
import ChoosePasswordPage from '../choosePassword/choosePasswordPage';
import HomePage from '../home/homePage';
import Authorizer from '../authorization/authorizer';
import PrivateRoute from '../authorization/privateRoute';
import App from '../App';

const Main = () => {
  return (
    <div className="container">
      <Switch>
        <PrivateRoute exact path="/" component={HomePage}/>
        <PrivateRoute path="/users" component={UsersPage} roles={["Administrator"]}/>
        <PrivateRoute path="/logout" component={LogoutPage}/>
        <Route path="/login" component={LoginPage}/>
        <Route path="/resetpassword" component={ResetPasswordPage}/>
        <Route path="/choosepassword" component={ChoosePasswordPage}/>
        <Route path="/notauthorized" render={() => (<h2>Access Denied</h2>)}/>
      </Switch>
    </div>
  );
};

export default Main;
