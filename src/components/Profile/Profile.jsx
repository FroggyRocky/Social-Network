import React from 'react'
import UserInfo from './UserInfo/UserInfo';
import PostsContainer from './Posts/PostsContainer'


export default function Profile(props) { 


return  <section>
      <UserInfo 
      backImg = {props.profile.photos.large}
      avatar = {props.profile.photos.small}
      fullName = {props.profile.fullName}
      location = {props.profile.location}
      contacts = {props.profile.contacts}
      age = {props.profile.age}
      aboutMe = {props.profile.aboutMe}
      id={props.profile.userId}/>
      <PostsContainer/>
    </section> 
  }