import React from 'react'
import {reduxForm, Field} from 'redux-form'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import chatStyles from '../Chat.module.css'

function ChatForm(props) {
    return <form onSubmit={props.handleSubmit} className={chatStyles.inputContainer}>
    <Field type="text" component='input' name='message' placeholder='Your message' />
    <button><SendOutlinedIcon fontSize='medium' color="primary"/></button>
</form>
}


const WithReduxForm = reduxForm({form:'Chat'})(ChatForm)


class ChatFormContainer extends React.Component { 

onSubmit = (chatFormData) => {                            ///this 
this.props.addMessage(chatFormData.message)
}
    render() {
        return <WithReduxForm onSubmit={this.onSubmit}/> /// or that with bind 
    }
}

export default ChatFormContainer