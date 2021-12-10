import PostStyle from './Post.module.css'
export default function Post(props) {
  return (
    <div className={PostStyle.postItems}>
      <div className={PostStyle.item}>
        <img src={props.avatarIcon} alt=""/>
        <p>{props.postText}</p>
        <p className={PostStyle.likes}>{props.likes}</p>
      </div>
    </div>
  )
}