import React from 'react'
import {addMessageActionCreator, registerChangesActionCreator} from "./../../redux/reducers/chatReducer"
import StoreContext from '../../redux/contex';
import Chat from './Chat'
export default function ChatContainer(props) { 

    

    return <StoreContext>
    { (store) => { 

function onAddMessage() {
        store.dispatch(addMessageActionCreator())
    }

    function onRegisterChanges(value) {
    store.dispatch(registerChangesActionCreator(value));
    }        
    return <Chat
        messages = {store.getState().ChatPage.messages}
        dialogues = {store.getState().ChatPage.dialogues}
        currentInput = {store.getState().ChatPage.currentInput}
        onAddMessage={onAddMessage}
        onRegisterChanges={onRegisterChanges}/>
}}
    </StoreContext>
}