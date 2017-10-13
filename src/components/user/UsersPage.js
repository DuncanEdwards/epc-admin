import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import { Pagination, ToggleButton, ToggleButtonGroup, ButtonToolbar, FormControl, InputGroup, Button, Col, Glyphicon } from 'react-bootstrap';
import UserList from './UserList';
import * as userActions from '../../actions/userActions';

class UsersPage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      sortField: "Surname",
      isAscending: true,
      typeFilter: null,
      searchTerm: null
    };

    this.handleSelect = this.handleSelect.bind(this);
    this.clickSortHeader = this.clickSortHeader.bind(this);
    this.typeFilterChange = this.typeFilterChange.bind(this);
    this.searchTextChange = this.searchTextChange.bind(this);
    this.searchCommit = this.searchCommit.bind(this);
    this.searchFilterKeyPress = this.searchFilterKeyPress.bind(this);
  }

  componentWillMount() {
    this.loadUsers(1);
  }

  render() {
    const {users,pagination} = this.props;
    return (
      <div>
        <h2>All Users</h2>
          <ButtonToolbar>
            <ToggleButtonGroup onChange={this.typeFilterChange} name="typeFilter" type="radio" defaultValue={""} bsSize="medium">
              <ToggleButton value="">All</ToggleButton>
              <ToggleButton value="Assessor">Assessor</ToggleButton>
              <ToggleButton value="Agent">Agent</ToggleButton>
              <ToggleButton value="Administrator">Administrator</ToggleButton>
            </ToggleButtonGroup>
            <Col xs={3}>
              <InputGroup>
                <FormControl type="text" onKeyPress={this.searchFilterKeyPress} onChange={this.searchTextChange} />
                <InputGroup.Button>
                  <Button onClick={this.searchCommit}><Glyphicon glyph={"search"}/></Button>
                </InputGroup.Button>
              </InputGroup>
            </Col>
          </ButtonToolbar>
          <br/>
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
    const {sortField, isAscending, typeFilter, searchTerm} = this.state;
    this.props.actions.loadUsers(
      pageNumber,
      sortField + ((!isAscending) ? " desc" : ""),
      typeFilter,
      searchTerm);
  }

  typeFilterChange(typeFilter) {
    this.setState({
      typeFilter:typeFilter
    }, () => this.loadUsers(1));
  }

  searchTextChange(element) {
    let searchTerm = element.target.value;
    this.setState({searchTerm});
  }

  searchFilterKeyPress(event) {
    if (event.key === 'Enter') {
      this.searchCommit();
    }
  }

  searchCommit() {
    this.loadUsers(1);
  }

  clickSortHeader(event) {
    let newSortField = (event.target.id) ? event.target.id : event.target.parentNode.id;
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
