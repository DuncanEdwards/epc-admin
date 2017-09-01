import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import MainNavbar from './components/common/navbar';

render(
    <div>
      <MainNavbar isAdministrator/>
    </div>,
  document.getElementById('app')
);
