import React,{PropTypes} from 'react';
import UserListRow from './UserListRow';
import { Table } from 'react-bootstrap';

const UserList = ({users}) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Surname</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
      {users.map(user =>
    <UserListRow key={user.id} user={user}/>
      )}
      </tbody>
    </Table>
  );
};

UserList.propTypes = {
  users: PropTypes.array.isRequired
};

export default UserList;
