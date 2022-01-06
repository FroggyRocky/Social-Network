import React from 'react'
import UserInfo from './UserInfo/UserInfo';
import PostsContainer from './Posts/Posts'

export default function Profile(props) { 

return <section>
      <UserInfo 
      profile={props.profile}
      status = {props.status}
      setStatus={props.setStatus}
      setPhoto={props.setPhoto}
      />
      <PostsContainer/>
    </section> 
  }