import styles from './Header.module.css'

export default function ModelWindow(props) {

    return <div onClick={props.exitModelWindowFn} className={styles.modelWindow_container}>
    <div className={styles.modelWindow_content}>
      <div className={styles.action_container}>
        <button>Settings</button>
        <button onClick={props.logOutFn}>Log Out</button>
      </div>
    </div>
  </div>
}