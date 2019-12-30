import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
// import 'core-js/features/array/find';
// import 'core-js/features/array/includes';
// import 'core-js/features/number/is-nan';
// import 'core-js/features/object/entries';
// import 'core-js/features/object/keys';
// import 'core-js/features/function';
// import 'core-js/features/function';
// import 'core-js/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider  } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {createStore,applyMiddleware} from 'redux';
import rootReducer from './login.reducer';
import Ococo from './Ococo';



const store = createStore(rootReducer,applyMiddleware(thunkMiddleware))
ReactDOM.render(<Provider store={store}>
   <Ococo />
  </Provider>, document.getElementById('root'));
  