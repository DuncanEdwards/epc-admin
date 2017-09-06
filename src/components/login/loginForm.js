import React,{PropTypes} from 'react';
import {
  Alert,
  Button,
  ControlLabel,
  FormGroup,
  FormControl,
  Glyphicon,
  InputGroup
  } from 'react-bootstrap';


const LoginForm = ({onSubmit,onInputChange,loginFormErrors,isSigningIn}) => {
  return (
    <form>
      <FormGroup focus={loginFormErrors.isEmailError} validationState={(loginFormErrors.isEmailError)?'error':null} controlId="email">
          <InputGroup>
            <InputGroup.Addon>
              <Glyphicon glyph="user" />
            </InputGroup.Addon>
            <FormControl  onChange={onInputChange} type="email" placeholder="Email" />
          </InputGroup>
      </FormGroup>
      <FormGroup autoFocus={(loginFormErrors.isPasswordError)} controlId="password" validationState={(loginFormErrors.isPasswordError)?'error':null}>
        <InputGroup>
          <InputGroup.Addon>
            <Glyphicon glyph="lock" />
          </InputGroup.Addon>
          <FormControl onChange={onInputChange} type="password" placeholder="Password" />
        </InputGroup>
      </FormGroup>
      {loginFormErrors.errorMessage &&
      <Alert bsStyle="danger">{loginFormErrors.errorMessage}</Alert>}
      <FormGroup>
        <Button disabled={isSigningIn} type="submit" onClick={onSubmit}>{isSigningIn ? 'Signing in...' : 'Sign in'}</Button>
      </FormGroup>
    </form>
  );
};

LoginForm.propTypes = {
  onInputChange:PropTypes.func.isRequired,
  onSubmit:PropTypes.func.isRequired,
  loginFormErrors:PropTypes.object.isRequired,
  isSigningIn:PropTypes.bool.isRequired
};

export default LoginForm;
