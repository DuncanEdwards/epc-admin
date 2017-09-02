
import React, { PropTypes } from 'react';
import RouteHandler from 'react-router-dom';

class Authorizer extends React.Component {

  componentWillMount() {
    debugger;
    const { routes } = this.props; // array of routes
    const { router } = this.context;

    router.push('/login');

  }

  render() {
    return (
      <div className="pure-g profile-container">
        <RouteHandler {...this.props} />;
      </div>
    );
  }

}

Authorizer.propTypes = {
  routes:PropTypes.object.isRequired
};

Authorizer.contextTypes = {
  router:PropTypes.object.isRequired
};

export default Authorizer;
