import React,{PropTypes} from 'react';
import UserListRow from './UserListRow';
import { Table, Glyphicon } from 'react-bootstrap';

const UserList = ({users,sortField, isAscending, onHeaderClick}) => {

  let firstNameFieldGlyph = ((sortField == 'FirstName') && isAscending) ? "chevron-down" : "chevron-up";
  let surnameFieldGlyph = ((sortField == 'Surname') && isAscending) ? "chevron-down" : "chevron-up";
  let emailFieldGlyph = ((sortField == 'Email') && isAscending) ? "chevron-down" : "chevron-up";
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th><span id="FirstName" role="button" onClick={onHeaderClick}>First Name <Glyphicon glyph={firstNameFieldGlyph} /></span></th>
          <th><span id="Surname" role="button" onClick={onHeaderClick}>Surname <Glyphicon glyph={surnameFieldGlyph} /></span></th>
          <th><span id="Email" role="button" onClick={onHeaderClick}>Email <Glyphicon glyph={emailFieldGlyph} /></span></th>
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
  users: PropTypes.array.isRequired,
  onHeaderClick:PropTypes.func.isRequired,
  sortField: PropTypes.string,
  isAscending: PropTypes.bool
};

export default UserList;
