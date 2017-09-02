import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import App from './components/App';
import {loadUsers} from './actions/userActions';
import {BrowserRouter} from 'react-router-dom';


const store = configureStore();
store.dispatch(loadUsers());

sessionStorage.setItem('jwtToken','duncan');

render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
