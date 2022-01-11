import React from 'react'
import UserInfo from './UserInfo/UserInfo';
import PostsContainer from './Posts/Posts'
import Preloader from '../common/Preloader/Preloader'

export default function Profile(props) { 

if(!props.profile) {
  return <Preloader />
} else return <section>
      <UserInfo 
      profile={props.profile}
      status = {props.status}
      setStatus={props.setStatus}
      toggleEditMode={props.toggleEditMode}
      />
      <PostsContainer/>
    </section> 
  }

  