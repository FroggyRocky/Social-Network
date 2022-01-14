import {useState, useEffect} from 'react'
import { reduxForm, Field } from "redux-form";
import avatarDefault from "../../../assets/imgs/userImg.jpg";
import backImgDefault from "../../../assets/imgs/backImg.jpg";
import styles from "./ProfileEdit.module.css";
import Modalstyles from "../../Header/Header.module.css";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { maxLengthVal } from "../../common/FormsValidation/FormsValidation";
import { TextArea, Input } from "../../common/FormsValidation/FieldContainers";

// the Component is exported from Header, 
// only method which is exported not from the header component but 
// carried over through props is toggleEditMode as we click the button of edit mode inside a profile

const maxLength = maxLengthVal("field", 200);
const maxLengthTextArea = maxLengthVal("field", 300);

function ProfileEdit(props) {


  function exitModelWindow(e) {
      const target = e.target.className
    if(target === Modalstyles.modelWindow_container) {
      props.toggleEditMode(false)
    }
  }


  function changeAvatar(e) {
    props.setPhoto(e.target.files[0]);
  }

  const contacts = Object.keys(props.profile.contacts).map((el) => {
    return (
      <p>
        {el.charAt(0).toUpperCase() + el.slice(1)}
        <Field
          type="text"
          name={"contacts." + el}
          component={Input}
          validate={[maxLength]}
        />
      </p>
    );
  });

  return (
    <div onClick={exitModelWindow} className={Modalstyles.modelWindow_container}>
      <form
        className={styles.modelWindow_content}
        onSubmit={props.handleSubmit} 
      >
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
                <Field type="text" component={Input} name="fullName" />
              </div>
              <div className={styles.lookingForAJob_container}>
                <p>Loking for a job:</p>
                <Field
                  type="checkbox"
                  component={Input}
                  name="lookingForAJob"
                />
              </div>
              <p className={styles.mySkills_header}>
                My skills:
              </p>
                <Field
                  type="text"
                  component={TextArea}
                  cols="50"
                  rows="5"
                  name="lookingForAJobDescription"
                />
              <h4 className={styles.contacts_header}>
              Contacts:
              </h4>
              {contacts}
              <p className={styles.about_header}>
                About:
              </p>
                <Field
                  type="text"
                  component={TextArea}
                  validate={[maxLengthTextArea]}
                  name="aboutMe"
                  cols="50"
                  rows="5"
                />
            </div>
          </div>
          <div className={styles.button}>
            <button>Submit</button>
          </div>
        </section>
      </form>
    </div>
  );
}

const WithReduxFormEditProfile = reduxForm({ form: "EditProfile" })(ProfileEdit);




export default function EditProfileFormContainer(props) {

  function onSubmit(formData) {
   props.setProfileData(formData)
  }

  return (
    <WithReduxFormEditProfile
      {...props}
      initialValues={props.profile}
      onSubmit={onSubmit}
    />
  );
}
