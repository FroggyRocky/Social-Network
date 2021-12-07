import Chat from './Chat'
import {compose} from 'redux'
import { connect } from 'react-redux'
import withRedirect from "../../hoc/withRedirect"
import {addMessage} from '../../redux/reducers/chatReducer'

const mapStateToProps = (state) => ({
    messages: state.ChatPage.messages,
    dialogues: state.ChatPage.dialogues,
})
export default compose(
    withRedirect,
    connect(mapStateToProps, {addMessage})
)(Chat)
