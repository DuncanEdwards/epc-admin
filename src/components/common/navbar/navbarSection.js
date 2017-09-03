import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import MainNavbar from './mainNavbar';
import * as authenticationActions from '../../../actions/authActions';

class NavbarSection extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {user} = this.props;
    return (<MainNavbar user={user}/>);
  }
}

NavbarSection.propTypes = {
  user:PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    user:state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators (authenticationActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarSection);
