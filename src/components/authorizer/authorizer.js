
import React, { PropTypes } from 'react';
import RouteHandler from 'react-router-dom';
import jwt_decode from 'jwt-decode';

class Authorizer extends React.Component {

  static GetUser({roles}) {
      debugger;
      let token = sessionStorage.getItem('jwtToken');
      if (token === null) {
        return null;
      }
      let decoded = jwt_decode(token);
      console.log(decoded);
  }

}

Authorizer.propTypes = {
  routes:PropTypes.object.isRequired
};

Authorizer.contextTypes = {
  router:PropTypes.object.isRequired
};

export default Authorizer;
