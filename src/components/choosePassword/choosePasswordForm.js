import React,{PropTypes} from 'react';
import {
  Alert,
  Button,
  FormGroup,
  FormControl,
  Glyphicon,
  InputGroup
  } from 'react-bootstrap';


const ChoosePasswordForm = ({onSubmit,onInputChange,errorMessage,successMessage,isResetting, password1InputRef, password2InputRef}) => {
  return (
    <form>
      <FormGroup validationState={(errorMessage)?'error':null} controlId="password1">
          <InputGroup>
            <InputGroup.Addon>
              <Glyphicon glyph="lock" />
            </InputGroup.Addon>
            <FormControl ref={password1InputRef} onChange={onInputChange} type="password" placeholder="New Password" />
          </InputGroup>
      </FormGroup>
      <FormGroup validationState={(errorMessage)?'error':null} controlId="password2">
          <InputGroup>
            <InputGroup.Addon>
              <Glyphicon glyph="lock" />
            </InputGroup.Addon>
            <FormControl ref={password2InputRef} onChange={onInputChange} type="password" placeholder="Repeat password" />
          </InputGroup>
      </FormGroup>

      {errorMessage &&
      <Alert bsStyle="danger">{errorMessage}</Alert>}
      {successMessage &&
      <Alert bsStyle="success">{successMessage}</Alert>}
      <FormGroup>
        <Button bsStyle="primary" disabled={isResetting} type="submit" onClick={onSubmit}>{isResetting ? 'Changing password...' : 'Change my password'}</Button>
      </FormGroup>
    </form>
  );
};

ChoosePasswordForm.propTypes = {
  onInputChange:PropTypes.func.isRequired,
  onSubmit:PropTypes.func.isRequired,
  errorMessage:PropTypes.string,
  successMessage:PropTypes.string,
  isResetting:PropTypes.bool.isRequired,
  password1InputRef:PropTypes.func.isRequired,
  password2InputRef:PropTypes.func.isRequired
};

export default ChoosePasswordForm;
