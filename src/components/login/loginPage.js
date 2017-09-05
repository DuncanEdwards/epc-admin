import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
/*import LoginDialog from './loginDialog';*/
import * as userActions from '../../actions/userActions';
import LoginDialog from './loginDialog';
import AuthApi from '../../api/mock/mockAuthApi';

class LoginPage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
        email: "",
        password: "",
        loginFormErrors: this.getInitialFormErrors()
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.attemptLogin = this.attemptLogin.bind(this);
  }

  getInitialFormErrors() {
    return  ({
          errorMessage: '',
          isEmailError: false,
          isPasswordError: false
        });
  }

  attemptLogin(event) {
    event.preventDefault();
    let {email, password} = this.state;
    if (this.validateFields(email,password)) {
      debugger;
      let result = AuthApi.getToken(email, password);
    }
  }

  /*Replace paramters with state*/
  validateFields(email,password) {
    let loginFormErrors = this.getInitialFormErrors();

    if ((!email) || (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i))) {
      loginFormErrors.errorMessage = 'Please enter a valid email address';
      loginFormErrors.isEmailError = true;
    } else if (!password) {
      loginFormErrors.errorMessage = 'Please enter a valid password';
      loginFormErrors.isPasswordError = true;
    }

    this.setState({loginFormErrors:loginFormErrors});

    return loginFormErrors.errorMessage == '';
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
        <LoginDialog onSubmit={this.attemptLogin} onInputChange={this.handleInputChange} loginFormErrors={this.state.loginFormErrors}/>
      </div>
    );
  }
}

export default LoginPage;
