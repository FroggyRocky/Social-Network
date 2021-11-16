import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./redux/store"
import {Provider} from 'react-redux'
const reRender = (state) => {
  return ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <App state = {state}/>
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
}

reRender(store.getState());



