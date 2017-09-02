import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import MainNavbar from './common/mainNavbar';
import Main from './common/main';

class App extends React.Component {
  render() {
    return (
      <div>
        <MainNavbar isAdministrator/>
        <Main/>
      </div>
    );
  }
}

/*App.propTypes = {
  children: PropTypes.object.isRequired
};*/


export default App;
