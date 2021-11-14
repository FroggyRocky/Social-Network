import React from 'react'
import {addMessageActionCreator, registerChangesActionCreator} from "./../../redux/reducers/chatReducer"
import Chat from './Chat'
export default function ChatContainer(props) { 

    function onAddMessage() {
        props.store.dispatch(addMessageActionCreator())
    }

    function onRegisterChanges(value) {
    props.store.dispatch(registerChangesActionCreator(value));
    }

    return (
        <Chat
        messages = {props.store.getState().ChatPage.messages}
        dialogues = {props.store.getState().ChatPage.dialogues}
        currentInput = {props.store.getState().ChatPage.currentInput}
        onAddMessage={onAddMessage}
        onRegisterChanges={onRegisterChanges}/>
    )
}