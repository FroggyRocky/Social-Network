import styles from './ProfileEdit.module.css'
import {reduxForm} from 'redux-form'

function ProfileEdit (props) { 

   return <div className={styles.modelWindow_container}>
   <div className={styles.modelWindow_content}>
    <div className={styles.backImg}>
    <img src={props.backImg || props.backImgDefault} alt="backgroundImage" />
  </div>
  <section className={styles.userInfo_container}>
    <div className={styles.userInfo}>
      <div className={styles.userAvatar}>
        <img src={props.avatar || props.avatarDefault} alt="userAvatar" />
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
</section>
</div>
</div>
}


export default reduxForm({form:EditProfile})ProfileEdit