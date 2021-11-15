import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./redux/store"
import {Provider} from './redux/contex';
const reRender = (state) => {
  return ReactDOM.render(
  <React.StrictMode>
  <Provider value={store}>
    <App state = {state}/>
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
}

reRender(store.getState());

store.subscribe(() => {
  let state = store.getState();
  reRender(state)
})



