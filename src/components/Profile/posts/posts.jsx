import React from "react"
import postsStyles from './posts.module.css'
import Post from './post/post'
export default function Posts() {
    return (
<div className={postsStyles.postsSection}>
  <div className={postsStyles.input}>
    <h4>New Post</h4>
  <textarea placeholder="What's new?!" name="" id="" cols="50" rows="2"></textarea>
  <button>Post</button>
  </div>
  <Post 
   avatarIcon = "https://i.pinimg.com/280x280_RS/57/2f/38/572f38a6d9c916a32064cca023ae6586.jpg"
   postText = 'Hey everyone, working on you project...Again;)'likes = '3,5m'/>
</div>
)
}