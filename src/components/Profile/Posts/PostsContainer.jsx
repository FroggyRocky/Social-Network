import Posts from "./Posts"
import {connect} from 'react-redux'

const mapStateToProps= (state) => {
return {
  posts:state.ProfilePage.posts,
}

} 

const PostsContainer = connect(mapStateToProps, {})(Posts)

export default PostsContainer;
