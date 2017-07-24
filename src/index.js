import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer.js';
import appReducer from "./reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";

import '../node_modules/font-awesome/css/font-awesome.min.css';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(appReducer);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
