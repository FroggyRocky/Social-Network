
import styles from "./Post.module.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ClearIcon from '@mui/icons-material/Clear';

export default function Post(props) {






function deletePost(id) {
  props.deletePost(id)
}

  return (
      <div className={styles.item}>
      <section className={styles.postInfo_container}>
        <img src={props.avatarIcon} alt="userIcon" />
        <p>{props.postText}</p>
      </section>
      <section className={styles.postActions_container}>
        <div className={styles.delete_container}>
          <div className={styles.delete} onClick={()=>{deletePost(props.id + 1)}} >
          <ClearIcon fontSize="small"/>
          </div>
        </div>
        <div className={styles.likes_container}>
          <FavoriteBorderIcon color='primary' fontSize="small" />
          <p className={styles.likes}>{props.likes}</p>
        </div>
      </section>
      </div>
  );
}
