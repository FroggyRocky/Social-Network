import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import data from './Data'
import {addPost, addMessage} from './Data'
ReactDOM.render(
  <React.StrictMode>
    <App data = {data} addPost={addPost} addMessage={addMessage}/>
  </React.StrictMode>,
  document.getElementById('root')
);


