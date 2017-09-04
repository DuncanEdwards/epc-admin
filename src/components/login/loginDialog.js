import React,{PropTypes} from 'react';

const LoginDialog = () => {
  return (
    <div id="loginbox" className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
      <div className="panel panel-info" >
          <div className="panel-heading">
              <div style={{textAlign: 'center'}} className="panel-title">Sign in to dashboard</div>
          </div>

          <div style={{paddingTop: 30 + 'px'}} className="panel-body" >

              <div style={{display: 'none'}} id="login-alert" className="alert alert-danger col-sm-12"></div>

              <form id="loginform" method="post" className="form-horizontal" role="form">

                  <div style={{marginBottom: 25 + 'px'}} className="input-group">
                    <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                    <input id="login-username" autoFocus type="text" className="form-control" name="username" value="" placeholder="email"/>
                  </div>

                  <div style={{marginBottom: 15 + 'px'}} className="input-group">
                    <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                    <input id="login-password" type="password" className="form-control" name="password" placeholder="password"/>
                  </div>

                  <div className="input-group">
                        <div className="checkbox">
                          <label>
                            <input id="login-remember" type="checkbox" name="remember" value="1"/> Remember me
                          </label>
                        </div>
                  </div>

                  <div style={{marginTop: 15 + 'px'}} className="form-group">
                      <div className="col-sm-12 controls">
                        <button id="btn-login" type="submit" className="btn btn-success">Login</button>
                      </div>
                  </div>

              </form>
          </div>
      </div>
      <a href="#" style={{marginLeft: 20 + 'px'}}>Forgot password?</a>
  </div>
  );
};

export default LoginDialog;
