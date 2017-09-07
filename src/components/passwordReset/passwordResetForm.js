import React,{PropTypes} from 'react';
import {
  Alert,
  Button,
  FormGroup,
  FormControl,
  Glyphicon,
  InputGroup
  } from 'react-bootstrap';


const PasswordResetForm = ({onSubmit,onInputChange,errorMessage,successMessage,isResetting,emailInputRef}) => {
  return (
    <form>
      <FormGroup validationState={(errorMessage)?'error':null} controlId="email">
          <InputGroup>
            <InputGroup.Addon>
              <Glyphicon glyph="envelope" />
            </InputGroup.Addon>
            <FormControl ref={emailInputRef} onChange={onInputChange} type="email" placeholder="Email" />
          </InputGroup>
      </FormGroup>
      {errorMessage &&
      <Alert bsStyle="danger">{errorMessage}</Alert>}
      {successMessage &&
      <Alert bsStyle="success">{successMessage}</Alert>}
      <FormGroup>
        <Button bsStyle="primary" disabled={isResetting} type="submit" onClick={onSubmit}>{isResetting ? 'Resetting...' : 'Reset my password'}</Button>
      </FormGroup>
      <a href="/login">Return to login</a>
    </form>
  );
};

PasswordResetForm.propTypes = {
  onInputChange:PropTypes.func.isRequired,
  onSubmit:PropTypes.func.isRequired,
  errorMessage:PropTypes.string,
  successMessage:PropTypes.string,
  isResetting:PropTypes.bool.isRequired,
  emailInputRef:PropTypes.func.isRequired
};

export default PasswordResetForm;
