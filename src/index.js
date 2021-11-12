
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./redux/state"

const reRender = (data) => {
  return ReactDOM.render(
  <React.StrictMode>
    <App
     data = {data} 
     addPost={store.addPost.bind(store)}
     addMessage={store.addMessage.bind(store)}
     registerChanges={store.registerChanges.bind(store)}
     registerChatInputChanges = {store.registerChatInputChanges.bind(store)}/>
  </React.StrictMode>,
  document.getElementById('root')
);
}

reRender(store.getState());
store.subscribe(reRender)



