import PostForm from './PostForm/PostForm'
import postsStyles from './posts.module.css'
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
     <PostForm />
      {postsComponents}
    </div>
  )
}