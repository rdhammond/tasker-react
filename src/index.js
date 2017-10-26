import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const baseUrl = process.env.API_URL || 'http://localhost/api';
ReactDOM.render(<App baseUrl={baseUrl} />, document.getElementById('root'));
registerServiceWorker();
