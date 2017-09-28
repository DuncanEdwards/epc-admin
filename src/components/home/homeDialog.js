import React,{PropTypes} from 'react';
import { Alert, Button } from 'react-bootstrap';

const HomeDialog = ({entryReason, onDismiss, isAlertVisible}) => {
  return (
    <div>
    <h2>EPC Administration Dashboard</h2>

    {(entryReason == "newuser") && (isAlertVisible) &&
      <Alert bsStyle="success" onDismiss={onDismiss}>
        <h4>Welcome to the EPC Administration Dashboard!</h4>
        <p>This is the area where you can perform all the functionality that you need to do your EPC stuff, whatever that is exactly.</p>
      </Alert>
    }
    {(entryReason == "passwordchanged") && (isAlertVisible) &&
      <Alert bsStyle="success" onDismiss={onDismiss}>
        <p>Your password has been successfully changed.</p>
      </Alert>
    }

    <p>Put stuff here!</p>
  </div>
  );
};

HomeDialog.propTypes = {
  entryReason:PropTypes.string,
  onDismiss:PropTypes.func.isRequired,
  isAlertVisible:PropTypes.bool.isRequired
};

export default HomeDialog;
