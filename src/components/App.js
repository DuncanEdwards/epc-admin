import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import NavbarSection from './common/navbar/navbarSection';
import Main from './common/main';
import * as accountActions  from "../actions/accountActions";

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
