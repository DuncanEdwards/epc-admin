import React,{PropTypes} from 'react';
import {
  FormGroup,
  FormControl,
  Col,
  ControlLabel,
  InputGroup,
  Button,
  Glyphicon} from 'react-bootstrap';


const LoginForm = ({onInputChange,loginFormErrors}) => {
  return (
    <form>
      <FormGroup  validationState={(loginFormErrors.isEmailError)?'error':null} horizontal controlId="email">
          <InputGroup sm={12}>
            <InputGroup.Addon>
              <Glyphicon glyph="user" />
            </InputGroup.Addon>
            <FormControl  onChange={onInputChange} type="email" placeholder="Email" />
          </InputGroup>
      </FormGroup>
      <FormGroup controlId="password">
        <InputGroup sm={12}>
          <InputGroup.Addon>
            <Glyphicon glyph="lock" />
          </InputGroup.Addon>
          <FormControl onChange={onInputChange} type="password" placeholder="Password" />
        </InputGroup>
      </FormGroup>

      <FormGroup>
        <Button type="submit">
          Sign in
        </Button>
      </FormGroup>
    </form>
  );
};

LoginForm.propTypes = {
  onInputChange:PropTypes.func.isRequired,
  loginFormErrors:PropTypes.object.isRequired
};

export default LoginForm;
