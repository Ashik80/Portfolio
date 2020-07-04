import React from 'react';
import ReactDOM from 'react-dom';
import './App/index.css';
import * as serviceWorker from './serviceWorker';
import App from './App/App';
import { Router } from 'react-router-dom';
import ScrollToTop from './App/Scroller/ScrollToTop';
import { createBrowserHistory } from 'history'

export const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <ScrollToTop />
    <App />
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
