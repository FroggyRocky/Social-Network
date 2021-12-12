import Posts from "./Posts"
import {connect} from 'react-redux'
import {addPost} from '../../../redux/reducers/profileReducer'

const mapStateToProps= (state) => {
return {
  posts:state.ProfilePage.posts,
}

} 

const PostsContainer = connect(mapStateToProps, {addPost})(Posts)

export default PostsContainer;
