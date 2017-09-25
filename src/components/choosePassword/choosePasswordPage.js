import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import {withRouter} from "react-router-dom";
import ChoosePasswordDialog from './choosePasswordDialog';
import AccountApi from "../../api/accountApi";
import * as authActions  from "../../actions/accountActions";
import queryString from 'query-string';

class ChoosePasswordPage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
        email: "",
        isResetting: false,
        errorMessage: null
    };

    console.log(queryString.parse(location.search.toLowerCase()).isnewuser);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.choosePassword = this.choosePassword.bind(this);

  }

  getInitialFormErrors() {
    return  ({
          errorMessage: '',
          isPassword1Error: false,
          successMessage: '',
          isEmailError: false,
          isPasswordError: false
        });
  }

  choosePassword(event) {

    //Stop the form from actually being submitted
    event.preventDefault();

    this.setState({errorMessage:""});

    let {password1,password2}  = this.state;

    if (!password1) {
      this.setState({isPassword1Error:true,errorMessage:"Please enter a new password"});
      this.focusToInput(this.password1InputRef);
    } else if (!password2) {
      this.setState({isPassword1Error:false,errorMessage:"Please confirm the password"});
      this.focusToInput(this.password2InputRef);
    } else if (password1 != password2) {
      this.setState({isPassword1Error:false,errorMessage:"Passwords do not match"});
      this.focusToInput(this.password2InputRef);
    }

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
          isNewUser={(queryString.parse(location.search.toLowerCase()).isnewuser == "true")}
          onSubmit={this.choosePassword}
          onInputChange={this.handleInputChange}
          errorMessage={this.state.errorMessage}
          isPassword1Error={this.state.isPassword1Error}
          successMessage={this.state.successMessage}
          isResetting={this.state.isResetting}
          password1InputRef={el => this.password1InputRef = el}
          password2InputRef={el => this.password2InputRef = el}
          />
      </div>
    );
  }
}

ChoosePasswordPage.propTypes = {
  history:PropTypes.object.isRequired
};

export default withRouter(ChoosePasswordPage);
