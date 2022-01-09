import { reduxForm, Field } from "redux-form";
import avatarDefault from "../../../assets/imgs/userImg.jpg";
import backImgDefault from "../../../assets/imgs/backImg.jpg";
import styles from "./ProfileEdit.module.css";
import Modalstyles from "../../Header/Header.module.css";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

function ProfileEdit(props) {

  function changeAvatar() {
    console.log("yo");
  }

  return (
    <form className={Modalstyles.modelWindow_container}>
      <div
        className={`${Modalstyles.modelWindow_content}
        ${styles.modelWindow_content}`}>
        <div className={styles.backImg}>
          <img src={props.backImg || backImgDefault} alt="backgroundImage" />
        </div>
        <section className={styles.userInfo_container}>
          <div className={styles.userInfo}>
            <div className={styles.userAvatar}>
              <img src={props.avatar || avatarDefault} alt="userAvatar" />
              <div className={styles.changeAvatar}>
              <label className="changeAvatar_icon" for="file-upload">
                <AddAPhotoIcon />
              </label>
                <input id="file-upload" onChange={changeAvatar} type="file" />
              </div>
            </div>
            <div className={styles.userBio}>
              <div className={styles.user_name_status_container}>
                <h3>{props.profile.fullName}</h3>
              </div>
              <p>Contacts:{props.profile.contacts.github}</p>
              <p>About:{props.profile.aboutMe}</p>
            </div>
          </div>
        </section>
        <div className={styles.button}>
          <button>Submit</button>
          </div>
      </div>
    </form>
  );
}

const WithReduxFormEditProfile = reduxForm({ form: "EditProfile" })(
  ProfileEdit
);

export default function EditProfileFormContainer(props) {
  function onSubmit(formData) {
    console.log(formData);
  }

  return <WithReduxFormEditProfile {...props} onSubmit={onSubmit} />;
}
