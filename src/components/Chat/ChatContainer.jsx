
import {addMessageActionCreator, registerChangesActionCreator}
 from "./../../redux/reducers/chatReducer"
import Chat from './Chat'
import {compose} from 'redux'
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

export default compose(
    withRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(Chat)
