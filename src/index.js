
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import data from "./redux/Data"
import {addPost, addMessage, registerChanges, registerChatInputChanges, subscriber} from './redux/Data';

const reRender = (Data) => {
  return ReactDOM.render(
  <React.StrictMode>
    <App
     data = {Data} 
     addPost={addPost}
     addMessage={addMessage}
     registerChanges={registerChanges}
     registerChatInputChanges = {registerChatInputChanges}/>
  </React.StrictMode>,
  document.getElementById('root')
);
}

reRender(data);
subscriber(reRender)



