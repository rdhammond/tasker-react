import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import config from '../config';

const baseUrl = process.env.BASE_URL || config.baseUrl || 'http://localhost/api';
ReactDOM.render(<App baseUrl={baseUrl} />, document.getElementById('root'));
registerServiceWorker();
