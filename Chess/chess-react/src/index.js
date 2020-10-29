import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navigation from './navigation';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App>
      <Navigation />
    </App>
  </React.StrictMode>,
  document.getElementById('root')
);
