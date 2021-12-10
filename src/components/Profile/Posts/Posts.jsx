import PostForm from './PostForm/PostForm'
import postsStyles from './Posts.module.css'
import Post from './Post/Post'

export default function Posts(props) {  
  const postsComponents = props.posts
    .map((post, index) => {
      return (
        <Post
          key={index}
          avatarIcon={post.avatar}
          postText={post.text}
          likes={post.likes}
        />
      )
    });

  return (
    <div className={postsStyles.postsSection}>
     <PostForm addPost={props.addPost} />
      {postsComponents}
    </div>
  )
}