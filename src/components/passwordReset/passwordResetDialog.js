import React,{PropTypes} from 'react';
import PasswordResetForm from './passwordResetForm';

const PasswordResetDialog = (props) => {
  return (
    <div className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">

      <div className="panel panel-info" >
          <div className="panel-heading">
              <div style={{textAlign: 'center'}} className="panel-title">Reset my Password</div>
          </div>

          <div style={{paddingTop: 30 + 'px'}} className="panel-body" >
            <p>{"Please enter your email address below and we'll send you an email to get you back on track"}</p><br/>
            <PasswordResetForm {...props}/>
          </div>

      </div>

  </div>
  );
};

export default PasswordResetDialog;
