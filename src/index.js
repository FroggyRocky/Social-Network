import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./redux/store"

const reRender = (state) => {
  return ReactDOM.render(
  <React.StrictMode>
    <App
     state = {state} 
     store = {store}/>
  </React.StrictMode>,
  document.getElementById('root')
);
}

reRender(store.getState());

store.subscribe(() => {
  let state = store.getState();
  reRender(state)
})



