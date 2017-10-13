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

    this.state = {
      sortField: "Surname",
      isAscending: false
    };

    this.handleSelect = this.handleSelect.bind(this);
    this.clickSortHeader = this.clickSortHeader.bind(this);
  }

  componentWillMount() {
    this.loadUsers(1);
  }

  render() {
    const {users,pagination} = this.props;
    return (
      <div>
        <h2>All Users</h2>
        <UserList onHeaderClick={this.clickSortHeader} sortField={this.state.sortField} isAscending={this.state.isAscending} users={users}/>
        {pagination &&
        <Pagination
          prev
          next
          first
          last
          ellipsis
          boundaryLinks
          items={pagination.totalPages}
          maxButtons={5}
          activePage={pagination.currentPage}
          onSelect={this.handleSelect}/>}
      </div>
    );
  }

  loadUsers(pageNumber) {
    const {sortField, isAscending} = this.state;
    debugger;
    this.props.actions.loadUsers(pageNumber, sortField + ((!isAscending) ? " desc" : ""));
  }

  clickSortHeader(event) {
    debugger;
    let newSortField = event.target.parentNode.id;
    if (newSortField == this.state.sortField) {
      this.setState({
        isAscending:(!this.state.isAscending)
      }, () => this.loadUsers(1));
    } else {
      this.setState({
        sortField:newSortField,
        isAscending:true
      }, () => this.loadUsers(1));
    }
  }

  handleSelect(eventKey) {
    this.loadUsers(eventKey);
  }

}

UsersPage.propTypes = {
  users:PropTypes.array.isRequired,
  pagination:PropTypes.object,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
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
