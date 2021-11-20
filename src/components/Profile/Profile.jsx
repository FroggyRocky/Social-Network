import React from 'react'
import UserInfo from './UserInfo/UserInfo';
import PostsContainer from './posts/PostsContainer'


export default function Profile(props) { 

const users = props.ProfilePage.users
.map((user, index) => {
  return <UserInfo 
      backImg = {user.backImg}
      avatar = {user.avatar}
      name = {user.name}
      location = {user.location}
      education = {user.education}
      age = {user.age}
      hobbies = {user.hobbies}
      id={index}
  />
})

return  <section>
      {users}
      <PostsContainer/>
    </section> 
  }