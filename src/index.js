import React from 'react';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { ScrollToTop } from './components';
import store from './store/store';

import './scss/app.scss';
import App from './App';

ReactDOM.render(
  // <React.StrictMode>
    <BrowserRouter>
      <Provider store={ store }>
        <ScrollToTop />
        <App />
      </Provider>
    </BrowserRouter>,
  // </React.StrictMode>,
  document.getElementById('root')
);