import React, {PropTypes} from 'react';
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

    if (props.user.isValid) {
      this.props.history.push('/');
    }

    this.state = {
        email: "",
        password: "",
        isSigningIn: false,
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
    let {actions} = this.props;
    if (this.validateFields(email,password)) {
      this.setState({isSigningIn:true});
      AuthApi.getToken(email, password).then( token =>
      {
        debugger;
        console.log(token);
        if (token) {
          sessionStorage.setItem('jwtToken', token);
          this.props.actions.refreshUser();
          this.props.history.push('/');
        }
        this.setState({isSigningIn:false});
      });

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
        <LoginDialog
          onSubmit={this.attemptLogin}
          onInputChange={this.handleInputChange}
          loginFormErrors={this.state.loginFormErrors}
          isSigningIn={this.state.isSigningIn}/>
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
