import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./components/app";
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
