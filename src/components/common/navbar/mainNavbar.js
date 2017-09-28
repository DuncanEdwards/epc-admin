import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';


const MainNavbar = ({user}) => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">EPC Administration</a>
        </Navbar.Brand>
      </Navbar.Header>

      {(user.isValid) &&
      <Nav>
        <NavDropdown id="jobs" title="Jobs">
          <MenuItem href="/jobs">All Jobs</MenuItem>
          {true && <MenuItem href="/addjobs">Add Job</MenuItem>}
        </NavDropdown>
        {true &&
          <NavDropdown id="users" title="Users">
            <MenuItem href="/users">All Users</MenuItem>
            {true && <MenuItem href="/adduser">Add User</MenuItem>}
          </NavDropdown>}
      </Nav>}
      {!(user.isValid) &&
        <Nav pullRight>
          <MenuItem href="/login">Sign In</MenuItem>
        </Nav>
      }

      {(user.isValid) &&
      <Nav pullRight>
        <NavDropdown id="user" title={(user.given_name + ' ' + user.family_name)}>
          <MenuItem>Administrator</MenuItem>
          <MenuItem divider />
          <MenuItem href="/choosepassword">Change Password</MenuItem>
          <MenuItem href="/logout">Sign Out</MenuItem>
        </NavDropdown>
      </Nav>}
    </Navbar>
  );
};

MainNavbar.propTypes = {
  user:PropTypes.object
};

export default MainNavbar;
