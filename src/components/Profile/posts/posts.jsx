import React from "react"
import postsStyles from './posts.module.css'
import Post from './post/post'
export default function Posts(props) {

  let textAreaEl = React.createRef();
  function getCurrentValue() {
    let currentValue = textAreaEl.current.value;
    props.addPost(currentValue);
  }
const postsComponents = props.posts
.map((post, index) => {
  return (
  <Post 
  key= {index}
  avatarIcon = {post.avatar}
  postText = {post.text}
  likes={post.likes}
   />
  )
})

    return (
<div className={postsStyles.postsSection}>
  <div className={postsStyles.input}>
    <h4>New Post</h4>
  <textarea ref={textAreaEl} placeholder="What's new?!" name="" id="" cols="50" rows="2"></textarea>
  <button onClick={getCurrentValue}>Post</button>
  </div>
  {postsComponents}
</div>
)
}