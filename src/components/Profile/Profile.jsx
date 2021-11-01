import React from 'react';
import profileStyles from './Profile.module.css'
import Posts from './posts/posts'
export default function Profile() {
  return (
    <section>
      <div className={profileStyles.backImg}>
        <img src="https://www.wallpapers.net/free-download-iron-man-movie-wallpaper-for-desktop-mobiles/download/1500x500.jpg" alt="" />
      </div>
      <div className={profileStyles.userInfo}>
        <div className={profileStyles.userAvatar}>
          <img src="https://i.pinimg.com/280x280_RS/57/2f/38/572f38a6d9c916a32064cca023ae6586.jpg" alt="" />
        </div>
        <div className={profileStyles.userBio}>
          <h3>Tony Stark</h3>
          <p>City:Planet Earth</p>
          <p>Technical Institute of Texas State(TITS)</p>
          <p>age:30</p>
          <p>Hobbies:Create stuff, hang out in my lab</p>
        </div>
      </div>
      <Posts />
    </section>
  )
}