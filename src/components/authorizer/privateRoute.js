import React, { PropTypes } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Authorizer from '../authorizer/authorizer';

const PrivateRoute = ({ component, exact = false, path, roles, location, render }) => {

    let user = Authorizer.GetUser();

    if (!user.isValid) {
      return(
        <Route exact={exact} path={path}>
          <Redirect to={{
            pathname: '/login',
            state: { from: location }}}/>
        </Route>);
    }
    if (Authorizer.ValidateRoles(user, roles)) {
      return(<Route exact={exact} path={path} component={component} render={render}/>);
    } else {
      return(
        <Route exact={exact} path={path}>
          <Redirect to={{
            pathname: '/notauthorized',
            state: { from: location }}}/>
        </Route>);
    }
};

const { object, bool, string, func } = PropTypes;

PrivateRoute.propTypes = {
  component: PropTypes.func,
  exact: PropTypes.bool,
  path: string.isRequired,
  roles: PropTypes.array,
  location: PropTypes.object,
  render: PropTypes.func
};


export default PrivateRoute;
