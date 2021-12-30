import PostForm from './PostForm/PostForm'
import styles from './Posts.module.css'
import Post from './Post/Post'
import {connect} from 'react-redux'
import {addPost,deletePost} from '../../../redux/reducers/profileReducer'

function Posts(props) { 
   
 
  const postsComponents = props.posts
    .map((post, index) => {
      return (
        <Post
          key={index}
          avatarIcon={post.avatar}
          postText={post.text}
          likes={post.likes}
          id={index}
          deletePost={props.deletePost}
        />
      )
    });

  return (
    <div className={styles.postsSection}>
     <PostForm addPost={props.addPost} />
      {postsComponents}
    </div>
  )
}

const mapStateToProps= (state) => {
return {
  posts:state.ProfilePage.posts,
}

} 



export default connect(mapStateToProps, {addPost, deletePost})(Posts)