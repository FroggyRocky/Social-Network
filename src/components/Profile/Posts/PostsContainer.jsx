import Posts from "./Posts"
import {onAddPostActionCreator, onRegisterChangesActionCreator}
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
    dispatch(onAddPostActionCreator())
  },
  onRegisterChanges: (value) => {
    dispatch(onRegisterChangesActionCreator(value))
  }
}
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer;
