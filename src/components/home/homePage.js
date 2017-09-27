import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import HomeDialog from './homeDialog';
import * as userActions from '../../actions/userActions';
import queryString from 'query-string';

class HomePage extends React.Component {

  constructor(props, context) {
    super(props, context);

    let entryReason = queryString.parse(props.location.search.toLowerCase()).entryreason;

    let isAlertVisible = (entryReason == "newuser");

    this.state = {
      isAlertVisible,
      entryReason
    };

    this.handleAlertDismiss = this.handleAlertDismiss.bind(this);

  }

  handleAlertDismiss() {
     this.setState({isAlertVisible: false});
  }


  render() {
    return (
      <div>
        <HomeDialog
          entryReason={this.state.entryReason}
          onDismiss={this.handleAlertDismiss}
          isAlertVisible={this.state.isAlertVisible} />
      </div>
    );
  }

}

HomePage.propTypes = {
  location:PropTypes.object.isRequired,
  actions:PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    user:state.user
  };
}


function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
