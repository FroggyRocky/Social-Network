import Posts from "./Posts"
import {connect} from 'react-redux'
import {addPost,deletePost} from '../../../redux/reducers/profileReducer'

const mapStateToProps= (state) => {
return {
  posts:state.ProfilePage.posts,
}

} 

const PostsContainer = connect(mapStateToProps, {addPost, deletePost})(Posts)

export default PostsContainer;
