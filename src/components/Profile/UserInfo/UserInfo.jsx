import React from 'react'
import userInfoStyles from './UserInfo.module.css'

export default function UserInfo(props) {
    return (
<>
    <div className={userInfoStyles.backImg}>
    <img src= {props.backImg} alt="" />
  </div>
<section className={userInfoStyles.userInfo_container}>
  <div className={userInfoStyles.userInfo}>
    <div className={userInfoStyles.userAvatar}>
      <img src={props.avatar} alt="" />
    </div>
    <div className={userInfoStyles.userBio}>
      <h3>{props.name}</h3>
      <p>{props.location}</p>
      <p>{props.education}</p>
      <p>age:{props.age}</p>
      <p>Hobbies:{props.hobbies}</p>
    </div>
  </div>
<div className={userInfoStyles.userFriends_container}>

</div>
</section>
</>
    )
}