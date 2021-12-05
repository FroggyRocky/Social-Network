import React from 'react'
import userInfoStyles from './UserInfo.module.css'
import UserStatus from './UserStatus'
export default function UserInfo(props) {

  return (
    <>
      <div className={userInfoStyles.backImg}>
        <img src={props.backImg} alt="" />
      </div>
      <section className={userInfoStyles.userInfo_container}>
        <div className={userInfoStyles.userInfo}>
          <div className={userInfoStyles.userAvatar}>
            <img src={props.avatar} alt="" />
           
          </div>
          <div className={userInfoStyles.userBio}>
            <div className={userInfoStyles.user_name_status_container}>
            <h3>{props.fullName}</h3>
            <UserStatus setStatus={props.setStatus} status={props.status} />
            </div>
            <p>{props.location}</p>
            <p>Contacts:{props.contacts.github}</p>
            <p>age:{props.age}</p>
            <p>About:{props.aboutMe}</p>
          </div>
        </div>
        <div className={userInfoStyles.userFriends_container}>

        </div>
      </section>
    </>
  )
}