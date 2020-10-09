import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import Store from './store/Store'
import {CssBaseline} from '@material-ui/core'

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <CssBaseline/>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
