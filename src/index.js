import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import registerServiceWorker from './actions/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
