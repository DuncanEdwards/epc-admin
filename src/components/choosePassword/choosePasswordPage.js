import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import {withRouter} from "react-router-dom";
import PasswordResetDialog from './passwordResetDialog';
import AccountApi from "../../api/accountApi";
import * as authActions  from "../../actions/accountActions";

class PasswordResetPage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
        email: "",
        isResetting: false,
        errorMessage: null
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.attemptReset = this.attemptReset.bind(this);
  }

  getInitialFormErrors() {
    return  ({
          errorMessage: '',
          successMessage: '',
          isEmailError: false,
          isPasswordError: false
        });
  }

  attemptReset(event) {

    //Stop the form from actually being submitted
    event.preventDefault();

    let {email} = this.state;

    //Do client side validation
    if (this.validateFields(email)) {
      this.setState({isResetting:true});
      let choosePasswordLink = window.location.href.replace('resetpassword', 'choosepassword');
      AccountApi.resetPassword(email,choosePasswordLink,false).then( success =>
      {
        let successMessage = '';
        if (success) {
          successMessage = "Password reset email sent to " + this.state.email + ".";
        }
        this.setState({successMessage});
        this.setState({isResetting:false});
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
  validateFields(email) {
    let loginFormErrors = this.getInitialFormErrors();
    let errorMessage = null;

    if ((!email) || (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i))) {
      errorMessage = 'Please enter a valid email address';
      this.focusToInput(this.emailInputRef);
    }
    this.setState({errorMessage});
    return (errorMessage == null);
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
          successMessage={this.state.successMessage}
          isResetting={this.state.isResetting}
          emailInputRef={el => this.emailInputRef = el} />
      </div>
    );
  }
}

PasswordResetPage.propTypes = {
  history:PropTypes.object.isRequired
};

export default withRouter(PasswordResetPage);
