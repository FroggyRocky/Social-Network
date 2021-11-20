
import postStyle from './post.module.css'
export default function Post(props) {
  return (
    <div className={postStyle.postItems}>
      <div className={postStyle.item}>
        <img src={props.avatarIcon} alt="" srcset="" />
        <p>{props.postText}</p>
        <p className={postStyle.likes}>{props.likes}</p>
      </div>
    </div>
  )
}