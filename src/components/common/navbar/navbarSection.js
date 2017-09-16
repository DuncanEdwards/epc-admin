import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import MainNavbar from './mainNavbar';

class NavbarSection extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {user} = this.props;
    console.log(user);
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

export default connect(mapStateToProps)(NavbarSection);
