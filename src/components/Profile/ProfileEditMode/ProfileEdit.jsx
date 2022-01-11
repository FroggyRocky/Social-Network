import { reduxForm, Field } from "redux-form";
import avatarDefault from "../../../assets/imgs/userImg.jpg";
import backImgDefault from "../../../assets/imgs/backImg.jpg";
import styles from "./ProfileEdit.module.css";
import Modalstyles from "../../Header/Header.module.css";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { maxLengthVal } from "../../common/FormsValidation/FormsValidation";
import { TextArea, Input } from "../../common/FormsValidation/FieldContainers";

//// the Component is exported from Header//////

const maxLength = maxLengthVal("field", 200);
const maxLengthTextArea = maxLengthVal("field", 300);

function ProfileEdit(props) {


  function changeAvatar(e) {
    props.setPhoto(e.target.files[0])
    }


  const contacts = Object.keys(props.profile.contacts).map((el) => {
    return (
      <p>
        { el.charAt(0).toUpperCase() + el.slice(1)}
        <Field type='text' name={'contacts.' + el} component={Input} validate={[maxLength]} />
      </p>
    );
  });



  return ( <div className={Modalstyles.modelWindow_container} >
    <form className={styles.modelWindow_content}
      onSubmit={props.handleSubmit}>
        <div className={styles.backImg}>
          <img src={props.backImg || backImgDefault} alt="backgroundImage" />
          <div className={styles.changeBackImg}>
            <label for="file-upload">
              <AddAPhotoIcon
                className={styles.icon}
                cursor="pointer"
                fontSize="small"
              />
            </label>
            <input id="file-upload" onChange={changeAvatar} type="file" />
          </div>
        </div>

        <section className={styles.userInfo_container}>
          <div className={styles.userInfo}>
            <div className={styles.userAvatar}>
              <img src={props.avatar || avatarDefault} alt="userAvatar" />
              <div className={styles.changeAvatar}>
                <label for="file-upload">
                  <AddAPhotoIcon
                    className={styles.icon}
                    cursor="pointer"
                    fontSize="small"
                  />
                </label>
                <input id="file-upload" onChange={changeAvatar} type="file" />
              </div>
            </div>

            <div className={styles.userBio}>
              <div className={styles.user_name_status_container}>
                <h3>Name:</h3>
                <Field
                  type="text"
                  component={Input}
                  name="fullName"
                />
              </div>
              <p>
                Loking for a job: <Field
                  type="checkbox"
                  component={Input}
                  name="lookingForAJob"
                />
              </p>

              <p>
                My skills:
                <Field
                  type="text"
                  component={Input}
                  name="lookingForAJobDescription"
                />
              </p>
              <b>Contacts:</b>
              {contacts}
              <p>
                About:
                <Field
                  type="text"
                  component={TextArea}
                  validate={[maxLengthTextArea]}
                  name="aboutMe"
                />
              </p>
            </div>
          </div>
        </section>

        <div className={styles.button}>
          <button>Submit</button>
        </div>
    </form>
  </div>
  );
}

const WithReduxFormEditProfile = reduxForm({ form: "EditProfile" })(
  ProfileEdit
);

export default function EditProfileFormContainer(props) {
  function onSubmit(formData) {
    console.log(formData);
  }

  return (
    <WithReduxFormEditProfile
      {...props}
      initialValues={props.profile}
      onSubmit={onSubmit}
    />
  );
}
