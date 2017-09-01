import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const UserListRow = ({user}) => {
  return (
    <tr>
      <td><a href={user.FirstName} target="_blank">Watch</a></td>
      <td>{user.Surname}</td>
      <td>{user.UserType}</td>
    </tr>
  );
};

UserListRow.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserListRow;
