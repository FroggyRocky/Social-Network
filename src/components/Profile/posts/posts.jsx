import React from "react"
import postsStyle from './posts.module.css'
import Post from './post/post'
export default function Posts() {
    return (
<div className={postsStyle.postsSection}>
  <div className={postsStyle.input}>
    <h4>New Post</h4>
  <textarea placeholder="What's new?!" name="" id="" cols="50" rows="2"></textarea>
  <button>Post</button>
  </div>
  <Post />
</div>
)
}