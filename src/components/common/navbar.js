import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';


const MainNavbar = ({isAdministrator}) => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          EPC Administration
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavDropdown title="Jobs">
          <MenuItem href="/jobs">All Jobs</MenuItem>
          {isAdministrator && <MenuItem href="/addjobs">Add Job</MenuItem>}
        </NavDropdown>
        {isAdministrator &&
          <NavDropdown title="Users">
            <MenuItem href="/users">All Users</MenuItem>
            {isAdministrator && <MenuItem href="/adduser">Add User</MenuItem>}
          </NavDropdown>}
      </Nav>
      <Nav pullRight>
        <NavDropdown title="Duncan Edwards">
          <MenuItem>Administrator</MenuItem>
          <MenuItem divider />
          <MenuItem href="/changepassword">Change Password</MenuItem>
          <MenuItem href="/logout">Sign Out</MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar>
  );
};

MainNavbar.proptypes = {
  isAdministrator:PropTypes.bool.isRequired
};

export default MainNavbar;
