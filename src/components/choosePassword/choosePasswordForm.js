import React,{PropTypes} from 'react';
import {
  Alert,
  Button,
  FormGroup,
  FormControl,
  Glyphicon,
  InputGroup
  } from 'react-bootstrap';


const ChoosePasswordForm = ({onSubmit,onInputChange,errorMessage,successMessage,isResetting, isComplete, user, isNewUser, errorId, oldPasswordInputRef, password1InputRef, password2InputRef}) => {
  return (
    <form>
      {user &&
      <FormGroup validationState={(errorMessage && (errorId == 'oldPassword'))?'error':null} controlId="oldPassword">
          <InputGroup>
            <InputGroup.Addon>
              <Glyphicon glyph="lock" />
            </InputGroup.Addon>
            <FormControl ref={oldPasswordInputRef} onChange={onInputChange} type="password" placeholder="Current password" />
          </InputGroup>
      </FormGroup>}
      <FormGroup validationState={(errorMessage && (errorId == 'password1'))?'error':null} controlId="password1">
          <InputGroup>
            <InputGroup.Addon>
              <Glyphicon glyph="lock" />
            </InputGroup.Addon>
            <FormControl ref={password1InputRef} onChange={onInputChange} type="password" placeholder="New password" />
          </InputGroup>
      </FormGroup>
      <FormGroup validationState={(errorMessage && (errorId == 'password2'))?'error':null} controlId="password2">
          <InputGroup>
            <InputGroup.Addon>
              <Glyphicon glyph="lock" />
            </InputGroup.Addon>
            <FormControl ref={password2InputRef} onChange={onInputChange} type="password" placeholder="Repeat Password" />
          </InputGroup>
      </FormGroup>


      {errorMessage &&
      <Alert bsStyle="danger">{errorMessage}</Alert>}
      {successMessage &&
      <Alert bsStyle="success">{successMessage}<br/>Click <a href="/login">here</a> to login.</Alert>}
      {(!isComplete) &&
      <FormGroup>
        {isNewUser &&
        <Button bsStyle="primary" disabled={isResetting} type="submit" onClick={onSubmit}>{isResetting ? 'Activating...' : 'Activate'}</Button>}
        {(!isNewUser) &&
        <Button bsStyle="primary" disabled={isResetting} type="submit" onClick={onSubmit}>{isResetting ? 'Changing password...' : 'Change my password'}</Button>}
      </FormGroup>}
    </form>
  );
};

ChoosePasswordForm.propTypes = {
  onInputChange:PropTypes.func.isRequired,
  onSubmit:PropTypes.func.isRequired,
  errorMessage:PropTypes.string,
  successMessage:PropTypes.string,
  isResetting:PropTypes.bool.isRequired,
  isComplete:PropTypes.bool.isRequired,
  user:PropTypes.object,
  isNewUser:PropTypes.bool.isRequired,
  errorId:PropTypes.string.isRequired,
  oldPasswordInputRef:PropTypes.func,
  password1InputRef:PropTypes.func.isRequired,
  password2InputRef:PropTypes.func.isRequired
};

export default ChoosePasswordForm;
