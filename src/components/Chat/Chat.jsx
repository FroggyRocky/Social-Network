import React, { useState } from 'react'
import chatStyles from './Chat.module.css'
import { NavLink } from 'react-router-dom'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

export default function Chat(props) {

    const [dialogue, setCurrentDialogue] = useState();
    
    function getCurrentDialogue(event) {
        setCurrentDialogue(event.target.innerText)
    }; 
    
    function addMessage() {
        props.onAddMessage();
    }

    function registerChanges(event) {
        let value = event.target.value
        props.onRegisterChanges(value)
    }
    
    const messagesComponents =
        props.messages
            .map((message, index) => {
                return <div
                    key={index} className={chatStyles.message} id={message.id}>{message.text}</div>

            })
    const dialoguesComponents =
        props.dialogues
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
                    value={props.currentInput} 
                    onChange={registerChanges} 
                    type="text" />
                    <button onClick={addMessage}><SendOutlinedIcon fontSiza='large' color="primary" /></button>
                </div>
            </div>
        </section>
    )
}