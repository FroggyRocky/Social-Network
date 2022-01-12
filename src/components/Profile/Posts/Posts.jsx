import PostForm from './PostForm/PostForm'
import styles from './Posts.module.css'
import Post from './Post/Post'
import {connect} from 'react-redux'
import {reset} from 'redux-form'
import {addPost, deletePost, likeDislikePost} from '../../../redux/reducers/profileReducer'

function Posts(props) { 
   
 
  const postsComponents = props.posts
    .map((post, index) => {
      return (
        <Post
          key={index}
          avatarIcon={post.avatar}
          postText={post.text}
          likes={post.likes}
          isLiked={post.isLiked}
          id={post.id}
          deletePost={props.deletePost}
          likeDislikePost={props.likeDislikePost}
        />
      )
    });

  return (
    <div className={styles.postsSection}>
     <PostForm addPost={props.addPost} reset={props.reset} />
      {postsComponents}
    </div>
  )
}

const mapStateToProps= (state) => {
return {
  posts:state.ProfilePage.posts,
}

} 

export default connect(mapStateToProps, {addPost, deletePost, likeDislikePost,reset})(Posts)