import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {withRouter} from "react-router-dom";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authActions  from "../../actions/authActions";
import Authorizer from "../authorizer/authorizer";
import LogoutDialog from "./logoutDialog";

class LogoutPage extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    Authorizer.LogoutCurrentUser();
    this.props.actions.refreshUser();
  }

  render() {
    return (<LogoutDialog/>);
  }

}

LogoutPage.propTypes = {
  actions:PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(authActions, dispatch)
    };
}

export default withRouter(connect(null, mapDispatchToProps)(LogoutPage));
