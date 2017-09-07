import React,{PropTypes} from 'react';
import {
  Alert,
  Button,
  FormGroup,
  FormControl,
  Glyphicon,
  InputGroup
  } from 'react-bootstrap';


const LoginForm = ({onSubmit,onInputChange,loginFormErrors,isSigningIn, emailInputRef, passwordInputRef}) => {
  return (
    <form>
      <FormGroup validationState={(loginFormErrors.isEmailError)?'error':null} controlId="email">
          <InputGroup>
            <InputGroup.Addon>
              <Glyphicon glyph="envelope" />
            </InputGroup.Addon>
            <FormControl ref={emailInputRef} onChange={onInputChange} type="email" placeholder="Email" />
          </InputGroup>
      </FormGroup>
      <FormGroup controlId="password" validationState={(loginFormErrors.isPasswordError)?'error':null}>
        <InputGroup>
          <InputGroup.Addon>
            <Glyphicon glyph="lock" />
          </InputGroup.Addon>
          <FormControl ref={passwordInputRef} onChange={onInputChange} type="password" placeholder="Password" />
        </InputGroup>
      </FormGroup>
      {loginFormErrors.errorMessage &&
      <Alert bsStyle="danger">{loginFormErrors.errorMessage}</Alert>}
      <FormGroup>
        <Button bsStyle="primary" disabled={isSigningIn} type="submit" onClick={onSubmit}>{isSigningIn ? 'Signing in...' : 'Sign in'}</Button>
      </FormGroup>
      <a href="/resetpassword">Forgot password?</a>
    </form>
  );
};

LoginForm.propTypes = {
  onInputChange:PropTypes.func.isRequired,
  onSubmit:PropTypes.func.isRequired,
  loginFormErrors:PropTypes.object.isRequired,
  isSigningIn:PropTypes.bool.isRequired,
  emailInputRef:PropTypes.func.isRequired,
  passwordInputRef:PropTypes.func.isRequired
};

export default LoginForm;
