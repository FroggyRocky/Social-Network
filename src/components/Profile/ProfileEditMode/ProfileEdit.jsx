import { reduxForm, Field } from "redux-form";
import avatarDefault from "../../../assets/imgs/userImg.jpg";
import backImgDefault from "../../../assets/imgs/backImg.jpg";
import styles from "./ProfileEdit.module.css";
import Modalstyles from "../../Header/Header.module.css";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import {maxLengthVal} from '../../common/FormsValidation/FormsValidation'
import {TextArea, Input} from '../../common/FormsValidation/FieldContainers'



const maxLength = maxLengthVal("field", 200)
const maxLengthTextArea = maxLengthVal('field', 300)

function ProfileEdit(props) {

  function changeAvatar() {
    console.log("yo");
  }

  return (
    <form onSubmit={props.handleSubmit} className={Modalstyles.modelWindow_container}>

      <div
        className={`${Modalstyles.modelWindow_content}
        ${styles.modelWindow_content}`}>
        <div className={styles.backImg}>
          <img src={props.backImg || backImgDefault} alt="backgroundImage" />
          <div className={styles.changeBackImg}>
              <label for="file-upload">
                <AddAPhotoIcon className={styles.icon} cursor='pointer'
                 fontSize='small'  />
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
                <AddAPhotoIcon className={styles.icon} cursor='pointer'
                 fontSize='small' />
              </label>
                <input id="file-upload" onChange={changeAvatar} type="file" />
              </div>
            </div>

            <div className={styles.userBio}>
              <div className={styles.user_name_status_container}>
                <h3>{props.profile.fullName}</h3>
              </div>
              <p>Loking for a job:
               <Field type='checkbox' component={Input}/>
               </p>
              <p>My skills:
              <Field type='text' component={Input} />
              </p>
              <b>Contacts:</b>
              <p>github:
               <Field type='text' component={Input} validate={[maxLength]} name='github' />
               </p>
              <p>vk: 
              <Field type='text' component={Input} validate={[maxLength]} name='vk' />
              </p>
              <p>facebook:
               <Field type='text' component={Input} validate={[maxLength]} name='facebook' />
               </p>
              <p>instagram: 
              <Field type='text' component={Input} validate={[maxLength]} name='instagram'/>
              </p>
              <p>twitter:
               <Field type='text' component={Input} validate={[maxLength]} name='twitter' />
              </p>
              <p>website: 
              <Field type='text' component={Input} validate={[maxLength]} name='website' />
              </p>
              <p>youtube:
               <Field type='text' component={Input} validate={[maxLength]} name='youtube' />
               </p>
              <p>mainLink: 
              <Field type='text' component={Input} validate={[maxLength]} name='mainLink' />
              </p>
              <p>About:
              <Field type='text' component={TextArea} validate={[maxLengthTextArea]} name='about' />
              </p>
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
