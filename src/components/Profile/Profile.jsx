import React from 'react'
import UserInfo from './UserInfo/UserInfo';
import PostsContainer from './Posts/PostsContainer'
import userImg from '../../assets/imgs/userImg.jpg'
import backImg from '../../assets/imgs/backImg.jpg'

export default function Profile(props) { 

return <section>
      <UserInfo 
      backImg = {!props.profile.photos.large ? backImg : props.profile.photos.large}
      avatar = {!props.profile.photos.small ? userImg : props.profile.photos.small}
      fullName = {props.profile.fullName}
      location = {props.profile.location}
      contacts = {props.profile.contacts}
      age = {props.profile.age}
      aboutMe = {props.profile.aboutMe}
      id = {props.profile.userId}
      status = {props.status}
      setStatus={props.setStatus}
      />
      <PostsContainer/>
    </section> 
  }