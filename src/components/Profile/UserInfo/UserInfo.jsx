import React from "react";
import styles from "./UserInfo.module.css";
import UserStatus from "./UserStatus";
import backImg from "../../../assets/imgs/backImg.jpg";
import avatar from "../../../assets/imgs/userImg.jpg";
import Preloader from "../../common/Preloader/Preloader";
import EditIcon from "@mui/icons-material/Edit";

function UserInfo({ profile, status, setStatus, toggleEditMode,isOwner}) {



  const contacts = Object.keys(profile.contacts).map((el) => {
    if(profile.contacts[el]) {
      return (
        <div className={styles.contacts_container}>
          <b>Contacts:</b>
          <p>
            {el}:{profile.contacts[el]}
          </p>
        </div>
      );
    }
  });

  function editOn() {
    toggleEditMode(true);
  }

  if (!profile) return <Preloader />;
  return (
    <>
      <div className={styles.backImg}>
        <img src={profile.photos.large || backImg} alt="" />
      </div>
      <section className={styles.userData_container}>
        <div className={styles.userData}>
          <div className={styles.userAvatar}>
            <img src={profile.photos.small || avatar} alt="" />
          </div>
          <div className={styles.userInfo_container}>
            <div className={styles.userInfo_major}>
                <div className={styles.edit_container}>
              <h3>{profile.fullName}</h3>
              {isOwner && <EditIcon
                onClick={editOn}
                className={styles.edit}
                color="primary"
                fontSize="small"
              />}</div>
              <div className={styles.userStatus_container}>
              <UserStatus setStatus={setStatus} status={status} />
            </div>
            {profile.lookingForAJob && <div className={styles.openToWork_container}>
             <i>#OpenToWork</i>
            </div>}
            </div>
           
            <div className={styles.userInfo_minor}>
              {contacts}
              <div className={styles.aboutMe_container}>
              <b>About Me</b>
              <p>{profile.aboutMe}</p>
              </div> 
              <div className={styles.skills_container}>
              <b>Skills</b>
              <p>{profile.lookingForAJobDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default UserInfo;
