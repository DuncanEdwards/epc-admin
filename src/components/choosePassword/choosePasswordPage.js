import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import {withRouter} from "react-router-dom";
import queryString from 'query-string';
import ChoosePasswordDialog from './choosePasswordDialog';
import AccountApi from "../../api/accountApi";
import * as accountActions  from "../../actions/accountActions";
import Authorizer from "../authorization/authorizer";

class ChoosePasswordPage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
        oldPassword:"",
        password1: "",
        password2: "",
        errorId: "",
        isResetting: false,
        isNewUser: (queryString.parse(location.search.toLowerCase()).isnewuser == "true"),
        email: queryString.parse(location.search.toLowerCase()).email,
        errorMessage: null,
        successMessage: null,
        isComplete:false,
        user:Authorizer.GetUser()
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.choosePassword = this.choosePassword.bind(this);

  }

  choosePassword(event) {

    //Stop the form from actually being submitted
    event.preventDefault();

    this.setState({errorMessage:"",successMessage:""});

    let {user,oldPassword,password1,password2}  = this.state;

    if ((user != null) && (!oldPassword)) {
      this.setState({errorId:"oldPassword",errorMessage:"Please enter your current password"});
      this.focusToInput(this.oldPasswordInputRef);
    } else if (!password1) {
      this.setState({errorId:"password1",errorMessage:"Please enter a new password"});
      this.focusToInput(this.password1InputRef);
    } else if (!password2) {
      this.setState({errorId:"password2",errorMessage:"Please confirm the password"});
      this.focusToInput(this.password2InputRef);
    } else if (password1 != password2) {
      this.setState({errorId:"password2",errorMessage:"Passwords do not match"});
      this.focusToInput(this.password2InputRef);
    } else if ((user != null) && (password1 == oldPassword)) {
      this.setState({errorId:"password1",errorMessage:"Please choose a different password"});
      this.focusToInput(this.password1InputRef);
    } else {
      this.setState({isResetting:true});
      this.resetPassword(user, password1, oldPassword);
      this.setState({isResetting:false});
    }

  }

  resetPassword(user, password, oldPassword) {
      let rememberToken = queryString.parse(location.search.toLowerCase()).remembertoken;
      if ((user == null) && (rememberToken == null)) {
        this.setState({isPassword1Error:false,errorMessage:"Unexpected error resetting password"});
        return;
      }

      if (user != null) {
        AccountApi.changePassword(user, oldPassword, password).then( response =>   {
          if (response.errorMessage) {
            this.setState({errorMessage:response.errorMessage});
          } else {
            this.props.history.push('/?entryreason=passwordchanged');
          }
        });
      } else {
        AccountApi.resetPassword(password, rememberToken).then( response =>   {
          if (response.errorMessage) {
            this.setState({errorMessage:response.errorMessage});
          } else {
            //Login and redirect to hime page
            this.props.actions.getToken(this.state.email, this.state.password1).then(
              (response) => {
                if (response.token) {
                  localStorage.setItem('jwtToken', response.token);
                  this.props.actions.refreshUser();
                  this.props.history.push('/?entryreason=passwordchanged');
                } else {
                  this.setState({errorMessage:response.errorMessage});
                }
              }).
              catch(error => {
                //TODO:Implement
              });
          }
        });
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
          user={this.state.user}
          isNewUser={this.state.isNewUser}
          onSubmit={this.choosePassword}
          onInputChange={this.handleInputChange}
          errorMessage={this.state.errorMessage}
          errorId={this.state.errorId}
          isComplete={this.state.isComplete}
          successMessage={this.state.successMessage}
          isResetting={this.state.isResetting}
          oldPasswordInputRef={el => this.oldPasswordInputRef = el}
          password1InputRef={el => this.password1InputRef = el}
          password2InputRef={el => this.password2InputRef = el}
          />
      </div>
    );
  }
}

ChoosePasswordPage.propTypes = {
  actions:PropTypes.object.isRequired,
  history:PropTypes.object.isRequired
};


function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(accountActions, dispatch)
    };
}

export default withRouter(connect(null, mapDispatchToProps)(ChoosePasswordPage));
