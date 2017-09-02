import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const UserListRow = ({user}) => {
  debugger;
  return (
    <tr>
      <td>{user.firstName}</td>
      <td>{user.surname}</td>
      <td>{user.type}</td>
    </tr>
  );
};

UserListRow.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserListRow;
