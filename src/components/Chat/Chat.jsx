import React, { useState } from 'react'
import chatStyles from './Chat.module.css'
import { NavLink } from 'react-router-dom'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

export default function Chat(props) {

    function addMessage() {
        props.addMessage()
    }

    function getChanges(event) {
    let value = event.target.value
    props.registerChatInputChanges(value);
    }

    const messagesComponents =
        props.ChatPageState.messages
            .map((message, index) => {
                return <div
                    key={index} className={chatStyles.message} id={message.id}>{message.text}</div>

            })
    const dialoguesComponents =
        props.ChatPageState.dialogues
            .map((dialogue, index) => {
                let path = `/messages/${dialogue.id}`
                return <div className={chatStyles.dialogueItem}>
                    <img src={`${dialogue.avatar}`} alt="" />
                    <NavLink
                        key={index}
                        to={path}
                        onClick={getCurrentDialogue}
                        className={chatStyles.dialogueLink}
                        activeClassName={chatStyles.activeNavLink}>{dialogue.name}</NavLink>
                </div>
            })
    const [dialogue, setCurrentDialogue] = useState();
    function getCurrentDialogue(event) {
        setCurrentDialogue(event.target.innerText)
    };
    return (
        <section className={chatStyles.messages_section}>
            <div className={chatStyles.dialogues}>
                {dialoguesComponents}
            </div>
            <div className={chatStyles.chat}>
                <h3>{dialogue}</h3>
                {messagesComponents}
                <div className={chatStyles.inputContainer}>
                    <input
                    value={props.ChatPageState.currentInput.text}
                    onChange={getChanges} 
                    type="text" />
                    <button onClick={addMessage}><SendOutlinedIcon fontSiza='large' color="primary" /></button>
                </div>
            </div>
        </section>
    )
}