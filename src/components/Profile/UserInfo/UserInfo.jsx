import React from "react";
import styles from "./UserInfo.module.css";
import UserStatus from "./UserStatus";
import backImg from "../../../assets/imgs/backImg.jpg";
import avatar from "../../../assets/imgs/userImg.jpg";
import Preloader from '../../common/Preloader/Preloader'
import EditIcon from '@mui/icons-material/Edit';

function UserInfo({ profile, status, setStatus, setPhoto, toggleEditMode}) {
  
  function changeAvatar(e) {
    let photo = e.target.files[0];
    setPhoto(photo);
  }

function editOn() {
  toggleEditMode(true)
}


  if (!profile)
    return (
      <Preloader />
    );
  return (
    <>
      <div className={styles.backImg}>
        <img src={profile.photos.large || backImg} alt="" />
      </div>
      <section className={styles.userData_container}>
        <div className={styles.userData}>
          <div className={styles.userAvatar}>
            <img src={profile.photos.small || avatar} alt="" />
            <div className={styles.changeAvatar}>
              <input onChange={changeAvatar} type="file" />
            </div>
          </div>
          <div className={styles.userInfo_container}>
            <div className={styles.userInfo_major}>
              <h3>{profile.fullName}</h3>
              <EditIcon onClick={editOn} className={styles.edit}
              color="primary" fontSize='small'/>
              </div>
            <div className={styles.userStatus_container}>
              <UserStatus setStatus={setStatus} status={status} />
              </div>
            <div className={styles.userInfo_minor}>
            <p>Contacts:{profile.contacts.github}</p>
            <p>About:{profile.aboutMe}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default UserInfo;
