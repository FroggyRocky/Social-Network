
import {addMessageActionCreator, registerChangesActionCreator}
 from "./../../redux/reducers/chatReducer"
import Chat from './Chat'
import { connect } from 'react-redux'
import withRedirect from "../../hoc/withRedirect"



const mapStateToProps = (state) => ({
    messages: state.ChatPage.messages,
    dialogues: state.ChatPage.dialogues,
    currentInput: state.ChatPage.currentInput
})

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

const withRedirectChatContainer = withRedirect(Chat)

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(withRedirectChatContainer)

export default ChatContainer;