import headerStyles from './Header.module.css'

export default function ModelWindow(props) {

    return <div onClick={props.exitModelWindowFn} className={headerStyles.modelWindow_container}>
    <div className={headerStyles.modelWindow_content}>
      <div className={headerStyles.action_container}>
        <button>Settings</button>
        <button onClick={props.logOutFn}>Log Out</button>
      </div>
    </div>
  </div>
}