import React from 'react';
import profileStyles from './Profile.module.css'
export default function Profile() {
    return (
        <section className={profileStyles.profile}>
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
<div className={profileStyles.postsSection}>
  <div className={profileStyles.input}>
    <h4>New Post</h4>
  <textarea value="What's New?" name="" id="" cols="50" rows="2"></textarea>
  <button>Post</button>
  </div>
  <div className={profileStyles.postItems}>
<div className={profileStyles.item}>
<img src="https://i.pinimg.com/280x280_RS/57/2f/38/572f38a6d9c916a32064cca023ae6586.jpg" alt="" srcset="" />
<p>Hey everyone, working on you project...Again;)</p>
<p className={profileStyles.likes}>1m likes</p>
</div>
  </div>
</div>
    </section>
    )
}