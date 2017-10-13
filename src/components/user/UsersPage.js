import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import { Pagination } from 'react-bootstrap';
import UserList from './UserList';
import * as userActions from '../../actions/userActions';

class UsersPage extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    debugger;
    const {users,pagination} = this.props;
    return (
      <div>
        <h2>All Users</h2>
        <UserList users={users}/>
        {pagination &&
        <Pagination
          prev
          next
          first
          last
          ellipsis
          boundaryLinks
          items={pagination.pageSize}
          maxButtons={5}
          activePage={3} />}
      </div>
    );
  }
}

UsersPage.propTypes = {
  users:PropTypes.array.isRequired,
  pagination:PropTypes.object,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  console.log("mapStateToProps");
  return {
    users:state.userData.users,
    pagination:state.userData.pagination
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators (userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
