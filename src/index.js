
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./redux/state"

const reRender = (data) => {
  return ReactDOM.render(
  <React.StrictMode>
    <App
     data = {data} 
     dispatch={store.dispatch.bind(store)}/>
  </React.StrictMode>,
  document.getElementById('root')
);
}

reRender(store.getState());
store.subscribe(reRender)



