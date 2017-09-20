import React,{PropTypes} from 'react';

const LogoutDialog = (props) => {
  return (
    <div><h3>You are logged out</h3><p>Click <a href="/login">here</a> to log back into the dashboard.</p></div>
  );
};

export default LogoutDialog;
