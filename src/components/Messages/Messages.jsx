import React, { useState } from 'react'
import messagesStyles from './Messages.module.css'
import { NavLink } from 'react-router-dom'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

export default function Messages(props) {
let newMessageRef = React.createRef()
function getCurrentMessage() {
let currentMessageValue = newMessageRef.current.value;
props.addMessage(currentMessageValue)
}

    const messagesComponents = props.messages
    .map((message, index) => {
            return <div
                key={index} className={messagesStyles.message} id={message.id}>{message.text}</div>

        })
    const dialoguesComponents = props.dialogues
        .map((dialogue, index) => {
            let path = `/messages/${dialogue.id}`
            return <div className={messagesStyles.dialogueItem}>
            <img src={`${dialogue.avatar}`} alt=""/>
             <NavLink
                key={index}
                to={path}
                onClick={getCurrentDialogue}
                className={messagesStyles.dialogueLink}
                activeClassName={messagesStyles.activeNavLink}>{dialogue.name}</NavLink>
            </div> 
        })
    const [dialogue, setCurrentDialogue] = useState();
    function getCurrentDialogue(event) {
        setCurrentDialogue(event.target.innerText)
    }
    return (
        <section className={messagesStyles.messages_section}>
            <div className={messagesStyles.dialogues}>
                {dialoguesComponents}
            </div>
            <div className={messagesStyles.chat}>
                <h3>{dialogue}</h3>
                {messagesComponents}
                <div className={messagesStyles.inputContainer}>
                    <input ref={newMessageRef} type="text" />
                    <button onClick={getCurrentMessage}><SendOutlinedIcon fontSiza='large' color="primary"/></button>
                   
                </div>
            </div>
        </section>
    )
}