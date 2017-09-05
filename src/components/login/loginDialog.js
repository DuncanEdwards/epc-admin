import React,{PropTypes} from 'react';
import LoginForm from './loginForm';

const LoginDialog = (props) => {
  return (
    <div id="loginbox" className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
      <div className="panel panel-info" >
          <div className="panel-heading">
              <div style={{textAlign: 'center'}} className="panel-title">Sign in to dashboard</div>
          </div>

          <div style={{paddingTop: 30 + 'px'}} className="panel-body" >
            <LoginForm {...props}/>
          </div>

      </div>

  </div>
  );
};

LoginForm.propTypes = {
  onInputChange:PropTypes.func.isRequired,
  loginFormErrors:PropTypes.object.isRequired
};

export default LoginDialog;
