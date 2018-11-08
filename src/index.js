import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const ROUTING_APP = (<BrowserRouter><App /></BrowserRouter>)

ReactDOM.render(ROUTING_APP, document.getElementById('root'));
serviceWorker.unregister();
