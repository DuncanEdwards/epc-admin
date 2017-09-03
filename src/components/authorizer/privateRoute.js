import React, { PropTypes } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Authorizer from '../authorizer/authorizer';

const PrivateRoute = ({ component, exact = false, path, authenticated }) => {

  const routeRender = (props) => {
    debugger;
    let user = Authorizer.GetUser();
    if (authenticated) {
      return(React.createElement(component, props));
    } else {
      return(
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }}}/>);
    }
  };

  return(<Route
    exact={exact}
    path={path}
    render={routeRender}
  />);
};

const { object, bool, string, func } = PropTypes;

PrivateRoute.propTypes = {
  component: func.isRequired,
  exact: bool,
  path: string.isRequired,
  authenticated: bool.isRequired,
  location: object
};


export default PrivateRoute;
