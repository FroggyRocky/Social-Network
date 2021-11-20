
import Posts from "./Posts"
import {addPostActionCreator, registerChangesActionCreator}
from './../../../redux/reducers/profileReducer'
import {connect} from 'react-redux'

const mapStateToProps= (state) => {
return {
  posts:state.ProfilePage.posts,
  currentInput:state.ProfilePage.currentInput
}

} 

const mapDispatchToProps = (dispatch) => {
return {
  onAddPost: () => {
    dispatch(addPostActionCreator())
  },
  onRegisterChanges: (value) => {
    dispatch(registerChangesActionCreator(value))
  }
}
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer;
