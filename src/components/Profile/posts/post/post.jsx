import React from 'react'
import postStyle from './post.module.css'
export default function Post() {
  return (
    <div className={postStyle.postItems}>
      <div className={postStyle.item}>
        <img src="https://i.pinimg.com/280x280_RS/57/2f/38/572f38a6d9c916a32064cca023ae6586.jpg" alt="" srcset="" />
        <p>Hey everyone, working on you project...Again;)</p>
        <p className={postStyle.likes}>1m likes</p>
      </div>
    </div>
  )
}