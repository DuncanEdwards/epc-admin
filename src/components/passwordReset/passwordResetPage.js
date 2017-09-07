import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import {withRouter} from "react-router-dom";
import PasswordResetDialog from './passwordResetDialog';
import AuthApi from "../../api/mock/mockAuthApi";
import * as authActions  from "../../actions/authActions";

class PasswordResetPage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
        email: "",
        isSigningIn: false,
        errorMessage: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.attemptReset = this.attemptReset.bind(this);
  }

  getInitialFormErrors() {
    return  ({
          errorMessage: '',
          isEmailError: false,
          isPasswordError: false
        });
  }

  attemptReset(event) {

    //Stop the form from actually being submitted
    event.preventDefault();

    let {email, password} = this.state;

    //Do client side validation
    if (this.validateFields(email,password)) {
      this.setState({isSigningIn:true});
      AuthApi.getToken(email, password).then( token =>
      {
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
    let errorMessage = null;

    if ((!email) || (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i))) {
      errorMessage = 'Please enter a valid email address';
      this.focusToInput(this.emailInputRef);
    }
    this.setState({errorMessage});
    return errorMessage == '';
  }

  handleInputChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  render() {
    return (
      <div>
        <PasswordResetDialog
          onSubmit={this.attemptReset}
          onInputChange={this.handleInputChange}
          errorMessage={this.state.errorMessage}
          isResetting={this.state.isSigningIn}
          emailInputRef={el => this.emailInputRef = el} />
      </div>
    );
  }
}

PasswordResetPage.propTypes = {
  user:PropTypes.object.isRequired,
  history:PropTypes.object.isRequired
};

export default withRouter(PasswordResetPage);
