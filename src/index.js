import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer.js';
import rootReducer from "./reducers";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from 'redux-thunk';

import '../node_modules/font-awesome/css/font-awesome.min.css';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware
  )
);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
