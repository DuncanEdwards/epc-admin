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

    this.state = {
        email: "",
        password: "",
        loginFormErrors: this.getInitialFormErrors()
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  getInitialFormErrors() {
    return  ({
          errorMessage: '',
          isEmailError: false,
          isPasswordError: false
        });
  }

  /*Replace paramters with state*/
  validateFields(email,password) {
    let loginFormErrors = this.getInitialFormErrors();

    if (!email) {
      loginFormErrors.errorMessage = 'Please enter a valid email address';
      loginFormErrors.isEmailError = true;
    }

    this.setState(
      Object.assign({}, this.state, { loginFormErrors: loginFormErrors }));
    debugger;
  }

  handleInputChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h2>LoginPage</h2>
        <LoginDialog onInputChange={this.handleInputChange} loginFormErrors={this.state.loginFormErrors}/>
      </div>
    );
  }
}

export default LoginPage;
