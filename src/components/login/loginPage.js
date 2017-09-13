import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import {withRouter} from "react-router-dom";
import LoginDialog from './loginDialog';
import AuthApi from "../../api/mock/mockAuthApi";
import Authorizer from "../authorizer/authorizer";
import * as authActions  from "../../actions/authActions";

class LoginPage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
        email: "",
        password: "",
        isSigningIn: false,
        loginFormErrors: this.getInitialFormErrors()
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.attemptLogin = this.attemptLogin.bind(this);
  }

  componentWillMount() {
    //If we're already logged in, move to home page
    if (this.props.user.isValid) {
      this.props.history.push('/');
    }
  }

  getInitialFormErrors() {
    return  ({
          errorMessage: '',
          isEmailError: false,
          isPasswordError: false
        });
  }

  attemptLogin(event) {

    //Stop the form from actually being submitted
    event.preventDefault();

    let {email, password} = this.state;
    let {actions} = this.props;

    //Do client side validation
    if (this.validateFields(email,password)) {
      this.setState({isSigningIn:true});
      AuthApi.getToken(email, password).then( response =>
      {
        if (response.token) {
          sessionStorage.setItem('jwtToken', response.token);
          this.props.actions.refreshUser();
          this.props.history.push('/');
        } else {
          let loginFormErrors = this.getInitialFormErrors();
          loginFormErrors.errorMessage = response.errorMessage;
          this.setState({loginFormErrors:loginFormErrors});
        }
        this.setState({isSigningIn:false});
      });

    }
  }

  focusToInput(inputNode) {
    let node = ReactDOM.findDOMNode(inputNode);
    if (node && node.focus instanceof Function) {
      node.focus();
    }
  }

  /*Replace paramters with state*/
  validateFields(email,password) {
    let loginFormErrors = this.getInitialFormErrors();

    if ((!email) || (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i))) {
      loginFormErrors.errorMessage = 'Please enter a valid email address';
      loginFormErrors.isEmailError = true;
      this.focusToInput(this.emailInputRef);
    } else if (!password) {
      loginFormErrors.errorMessage = 'Please enter a valid password';
      loginFormErrors.isPasswordError = true;
      this.focusToInput(this.passwordInputRef);
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
        <LoginDialog
          onSubmit={this.attemptLogin}
          onInputChange={this.handleInputChange}
          loginFormErrors={this.state.loginFormErrors}
          isSigningIn={this.state.isSigningIn}
          emailInputRef={el => this.emailInputRef = el}
          passwordInputRef={el => this.passwordInputRef = el} />
      </div>
    );
  }
}

LoginPage.propTypes = {
  actions:PropTypes.object.isRequired,
  user:PropTypes.object.isRequired,
  history:PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    user:state.user
  };
}


function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(authActions, dispatch)
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPage));
