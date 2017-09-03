import React, { PropTypes } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Authorizer from '../authorizer/authorizer';

const PrivateRoute = ({ component, exact = false, path, authenticated, roles, location, render }) => {

    if (Authorizer.ValidateRoles(roles)) {
      return(<Route exact={exact} path={path} component={component} render={render}/>);
    } else {
      return(
        <Route exact={exact} path={path}>
          <Redirect to={{
            pathname: '/login',
            state: { from: location }}}/>
        </Route>);
    }
};

const { object, bool, string, func } = PropTypes;

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  exact: PropTypes.bool,
  path: string.isRequired,
  authenticated: bool.isRequired,
  roles: PropTypes.array,
  location: PropTypes.object,
  render: PropTypes.object
};


export default PrivateRoute;
