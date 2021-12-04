
import {addMessageActionCreator, registerChangesActionCreator} from "./../../redux/reducers/chatReducer"
import Chat from './Chat'
import { connect } from 'react-redux'


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

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat)

export default ChatContainer;