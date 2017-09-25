import React,{PropTypes} from 'react';
import ChoosePasswordForm from './choosePasswordForm';

const ChoosePasswordDialog = (props) => {
  return (
    <div className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">

      <div className="panel panel-info" >
          <div className="panel-heading">
              <div style={{textAlign: 'center'}} className="panel-title">{(props.isNewUser)?"Choose password":"Change password"}</div>
          </div>

          <div style={{paddingTop: 30 + 'px'}} className="panel-body" >
            <p>{(props.isNewUser)?"Please enter a new password.":"Please enter a password for your user account."}</p><br/>
            <ChoosePasswordForm {...props}/>
          </div>

      </div>

  </div>
  );
};

ChoosePasswordDialog.propTypes = {
  onInputChange:PropTypes.func.isRequired,
  isNewUser:PropTypes.bool.isRequired
};

export default ChoosePasswordDialog;
