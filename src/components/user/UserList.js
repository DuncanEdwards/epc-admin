import React,{PropTypes} from 'react';
import UserListRow from './UserListRow';
import { Table } from 'react-bootstrap';

const UserList = ({users}) => {
  return (
    <Table striped bordered condensed hover>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Surname</th>
          <th>Type</th>
          <th>Category</th>
          <th>Length</th>
        </tr>
      </thead>
      <tbody>
      </tbody>
    </Table>
  );
};

UserList.propTypes = {
  users: PropTypes.array.isRequired
};

export default UserList;
