import React from 'react';
import { Route } from 'react-router';
import App from './components/App';
import UsersPage from './components/user/UsersPage';

export default (
  <Route path="/" component={App}>
    <Route path="/users" component={UsersPage}/>
  </Route>
);
