import styles from "./Post.module.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ClearIcon from '@mui/icons-material/Clear';



export default function Post(props) {


function likeDislike(id, isLiked) {
props.likeDislikePost(isLiked,id )
}

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
          <div className={styles.delete} onClick={()=>{deletePost(props.id)}}> 
          <ClearIcon fontSize="small"/> 
          </div>
        </div>
        <div className={styles.likes_container}>
          <FavoriteBorderIcon 
           className={styles.like} onClick={() => {likeDislike(props.id, props.isLiked)}} 
          color={props.isLiked ? 'success' : 'action'} fontSize="small" />
          <p className={styles.likes}>{props.likes}</p>
        </div>
      </section>
      </div>
  );
}
