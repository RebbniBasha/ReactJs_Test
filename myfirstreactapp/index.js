import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore,applyMiddleware} from 'redux';
import UserReducer from './UserReducers'

const store = createStore(UserReducer,applyMiddleware(thunkMiddleware));

ReactDOM.render(
    <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

serviceWorker.unregister();
