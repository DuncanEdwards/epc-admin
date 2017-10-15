import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {
  ToggleButton,
  ToggleButtonGroup,
  ButtonToolbar,
  FormControl,
  InputGroup,
  Button,
  Col,
  Glyphicon} from 'react-bootstrap';

const UserListFilter = ({onTypeFilterChange,onSearchFilterKeyPress,onSearchTextChange,onSearchCommit}) => {
  return (
    <ButtonToolbar>
      <ToggleButtonGroup onChange={onTypeFilterChange} name="typeFilter" type="radio" defaultValue={""} bsSize="medium">
        <ToggleButton value="">All</ToggleButton>
        <ToggleButton value="Assessor">Assessor</ToggleButton>
        <ToggleButton value="Agent">Agent</ToggleButton>
        <ToggleButton value="Administrator">Administrator</ToggleButton>
      </ToggleButtonGroup>
      <Col xs={3}>
        <InputGroup>
          <FormControl type="text" placeholder="filter users" onKeyPress={onSearchFilterKeyPress} onChange={onSearchTextChange} />
          <InputGroup.Button>
            <Button onClick={onSearchCommit}><Glyphicon glyph={"search"}/></Button>
          </InputGroup.Button>
        </InputGroup>
      </Col>
    </ButtonToolbar>
  );
};

UserListFilter.propTypes = {
  onTypeFilterChange: PropTypes.func.isRequired,
  onSearchFilterKeyPress: PropTypes.func.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  onSearchCommit: PropTypes.func.isRequired
};

export default UserListFilter;
