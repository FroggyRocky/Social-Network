import React from 'react';
import UserInfo from './UserInfo/UserInfo';
import Posts from './posts/posts'
export default function Profile(props) { 
  return (
   
    <section>
      <UserInfo
      backImg = "https://www.wallpapers.net/free-download-iron-man-movie-wallpaper-for-desktop-mobiles/download/1500x500.jpg"
      avatar = "https://i.pinimg.com/280x280_RS/57/2f/38/572f38a6d9c916a32064cca023ae6586.jpg"
      name = 'Tony Stark'
      location = 'City:Planet Earth'
      education = 'Technical Institute of Texas State(TITS)'
      age = '30'
      hobbies = 'Create stuff, hang out in my lab'
      />
      <Posts
      posts = {props.ProfilePageState.posts}
      currentInputValue = {props.ProfilePageState.currentInput}
      dispatch={props.dispatch} />
    </section>
  )
}