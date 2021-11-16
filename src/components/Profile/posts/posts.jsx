import React from "react"
import postsStyles from './posts.module.css'
import Post from './post/Post'

export default function Posts(props) {

  function addPost() {
    props.onAddPost()
  }
  function registerChanges(e){
    let value = e.target.value
    props.onRegisterChanges(value);
  }
  
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
      <div className={postsStyles.input}>
        <h4>New Post</h4>
        <textarea
          value={props.currentInput}
          onChange={registerChanges}
          placeholder="What's new?!"
          name="" id="" cols="50" rows="2">{props.currentInput}</textarea>
        <button onClick={addPost}>Post</button>
      </div>
      {postsComponents}
    </div>
  )
}