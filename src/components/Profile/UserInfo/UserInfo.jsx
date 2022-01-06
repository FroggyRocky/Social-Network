import React from "react";
import styles from "./UserInfo.module.css";
import UserStatus from "./UserStatus";
import backImg from "../../../assets/imgs/backImg.jpg";
import avatar from "../../../assets/imgs/userImg.jpg";
import Preloader from '../../common/Preloader/Preloader'

function UserInfo({ profile, status, setStatus, setPhoto }) {
  
  function changeAvatar(e) {
    let photo = e.target.files[0];
    setPhoto(photo);
  }
  if (!profile)
    return (
      <Preloader />
    );

  return (
    <>
      <div className={styles.backImg}>
        <img src={profile.photos.small || backImg} alt="" />
      </div>
      <section className={styles.userInfo_container}>
        <div className={styles.userInfo}>
          <div className={styles.userAvatar}>
            <img src={profile.photos.small || avatar} alt="" />
            <div className={styles.changeAvatar}>
              <input onChange={changeAvatar} type="file" />
            </div>
          </div>

          <div className={styles.userBio}>
            <div className={styles.user_name_status_container}>
              <h3>{profile.fullName}</h3>
              <UserStatus setStatus={setStatus} status={status} />
            </div>
            <p>Contacts:{profile.contacts.github}</p>
            <p>About:{profile.aboutMe}</p>
          </div>
        </div>
        <div className={styles.userFriends_container}></div>
      </section>
    </>
  );
}

export default UserInfo;
