
import React, { PropTypes } from 'react';
import RouteHandler from 'react-router-dom';
import jwt_decode from 'jwt-decode';

class Authorizer extends React.Component {

  static GetUser() {

    let token = sessionStorage.getItem('jwtToken');
    if (token === null) {
      return { isValid: false };
    }

    let user = jwt_decode(token);
    user['isValid'] = true;
    //Map over a more user friendly role
    user['role'] = user['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
    //Calculate if expired
    if(user.exp < Math.round((new Date()).getTime()/1000))
    {
      //Token expired (expired, return isValid=false)
      user['isValid'] = false;
    }
    return user;
  }

  static GetUserRole(user) {
    if (!user.isValid) {
      return null;
    } else {
      return user['role'];
    }
  }

  static ValidateRoles(user, userRoles) {
    if (!userRoles) {
      //No roles to validate if, there is a user then return true
      return (user.isValid);
    }
    //Return if matches
    return userRoles.includes(this.GetUserRole(user));
  }

}

export default Authorizer;
