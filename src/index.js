import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import App from './components/App';
import {loadUsers} from './actions/userActions';
import {getUser} from './actions/authActions';
import {BrowserRouter} from 'react-router-dom';


const store = configureStore();
store.dispatch(loadUsers());
store.dispatch(getUser());

sessionStorage.setItem('jwtToken','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJURVNUIiwianRpIjoiNWI0MDFmM2UtYTBkNS00YjdkLTkwMjYtZjFlZWQ2YTM0NjVjIiwiaWF0IjoxNTAzOTEyMTk4LCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbmlzdHJhdG9yIiwibmJmIjoxNTAzOTEyMTk4LCJleHAiOjE1MDM5OTg1OTgsImlzcyI6IkV4YW1wbGVJc3N1ZXIiLCJhdWQiOiJFeGFtcGxlQXVkaWVuY2UifQ.Z6edDLAmdM-n62fMhtNfmjdupyAtw1br6JRVpokH430');

render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
