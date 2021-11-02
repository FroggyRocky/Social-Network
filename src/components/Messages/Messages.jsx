import React, {useState} from 'react'
import messagesStyles from './Messages.module.css'
import {NavLink} from 'react-router-dom'
const dialogues = [
    {name:'Julia', id:1},
    {name:'Eric Packman', id:2}
]
const messages = [
{text:'Hey', id:1},
{text:'Hey!', id:2},
{text:'Do you still study programming', id:3},
{text:'Of course', id:4}
]



const messagesComponents = messages
.map((message) => {
    return <div className={messagesStyles.message} id={message.id}>{message.text}</div>
})




export default function Messages() {
const dialoguesComponents = dialogues
.map((dialogue) => { 
    let path = `/messages/${dialogue.id}` 
    return <NavLink
     to={path} 
     onClick = {getCurrentDialogue}
     className={messagesStyles.dialogue}
     activeClassName = {messagesStyles.activeNavLink}>{dialogue.name}</NavLink>
} )
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