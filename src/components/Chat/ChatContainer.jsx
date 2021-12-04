
import {addMessageActionCreator, registerChangesActionCreator}
 from "./../../redux/reducers/chatReducer"
import Chat from './Chat'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'



const mapStateToProps = (state) => {
return {
    messages: state.ChatPage.messages,
    dialogues: state.ChatPage.dialogues,
    currentInput: state.ChatPage.currentInput,
    isLogged:state.Auth.isLogged
}
}

const mapDispatchToProps = (dispatch) => {
return {
    onAddMessage: () => {
        dispatch(addMessageActionCreator())
    },
    onRegisterChanges: (value) => {
        dispatch(registerChangesActionCreator(value))
    }
}
}

const withAuthContainer = (props) => {
    if(!props.isLogged) return <Redirect to='/login' />
    return <Chat {...props} />
} 
const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(withAuthContainer)

export default ChatContainer;