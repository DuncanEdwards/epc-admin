import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
/*import LoginDialog from './loginDialog';*/
import * as userActions from '../../actions/userActions';
import LoginDialog from './loginDialog';

class LoginPage extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <h2>LoginPage</h2>
        <LoginDialog/>
      </div>
    );
  }
}

export default LoginPage;
