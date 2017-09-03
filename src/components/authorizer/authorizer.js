
import React, { PropTypes } from 'react';
import RouteHandler from 'react-router-dom';
import jwt_decode from 'jwt-decode';

class Authorizer extends React.Component {

  static ValidateRoles(userRoles) {

      let token = sessionStorage.getItem('jwtToken');
      if (token === null) {
        return false;
      }

      if (userRoles) {
        let decoded = jwt_decode(token);
        let role = decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
        return userRoles.includes(role);
      } else {
        return true;
      }

  }

}

export default Authorizer;
