import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import NavbarSection from './common/navbar/navbarSection';
import Main from './common/main';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavbarSection />
        <Main/>
      </div>
    );
  }
}

export default App;
