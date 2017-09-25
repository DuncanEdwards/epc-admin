import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import {withRouter} from "react-router-dom";
import ChoosePasswordDialog from './choosePasswordDialog';
import AccountApi from "../../api/accountApi";
import * as authActions  from "../../actions/accountActions";

class ChoosePasswordPage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
        email: "",
        isResetting: false,
        errorMessage: null
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.choosePassword = this.choosePassword.bind(this);
  }

  getInitialFormErrors() {
    return  ({
          errorMessage: '',
          successMessage: '',
          isEmailError: false,
          isPasswordError: false
        });
  }

  choosePassword(event) {

    //Stop the form from actually being submitted
    event.preventDefault();

    console.log(this.props.params.userId)

    let {password1,password2}  = this.state;

  }

  focusToInput(inputNode) {
    let node = ReactDOM.findDOMNode(inputNode);
    if (node && node.focus instanceof Function) {
      node.focus();
    }
  }

  handleInputChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  render() {
    return (
      <div>
        <ChoosePasswordDialog
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

ChoosePasswordPage.propTypes = {
  history:PropTypes.object.isRequired
};

export default withRouter(ChoosePasswordPage);
