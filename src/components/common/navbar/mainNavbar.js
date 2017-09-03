import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';


const MainNavbar = ({user}) => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          EPC Administration
        </Navbar.Brand>
      </Navbar.Header>

      {(user != null) &&
      <Nav>
        <NavDropdown title="Jobs">
          <MenuItem href="/jobs">All Jobs</MenuItem>
          {true && <MenuItem href="/addjobs">Add Job</MenuItem>}
        </NavDropdown>
        {true &&
          <NavDropdown title="Users">
            <MenuItem href="/users">All Users</MenuItem>
            {true && <MenuItem href="/adduser">Add User</MenuItem>}
          </NavDropdown>}
      </Nav>}
      {(user != null) &&
      <Nav pullRight>
        <NavDropdown title="Duncan Edwards">
          <MenuItem>Administrator</MenuItem>
          <MenuItem divider />
          <MenuItem href="/changepassword">Change Password</MenuItem>
          <MenuItem href="/logout">Sign Out</MenuItem>
        </NavDropdown>
      </Nav>}
    </Navbar>
  );
};

MainNavbar.propTypes = {
  user:PropTypes.object.isRequired
};

export default MainNavbar;
