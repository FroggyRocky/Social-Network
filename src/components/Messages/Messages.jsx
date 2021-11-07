import React, { useState } from 'react'
import messagesStyles from './Messages.module.css'
import { NavLink } from 'react-router-dom'

export default function Messages(props) {
    const messagesComponents = props.messages
    .map((message, index) => {
            return <div
                key={index} className={messagesStyles.message} id={message.id}>{message.text}</div>

        })
    const dialoguesComponents = props.dialogues
        .map((dialogue, index) => {
            let path = `/messages/${dialogue.id}`
            return <NavLink
                key={index}
                to={path}
                onClick={getCurrentDialogue}
                className={messagesStyles.dialogue}
                activeClassName={messagesStyles.activeNavLink}>{dialogue.name}</NavLink>
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
                <h4>{dialogue}</h4>
                {messagesComponents}
            </div>
        </section>
    )
}