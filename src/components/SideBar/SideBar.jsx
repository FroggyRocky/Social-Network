
import {NavLink} from "react-router-dom";
import sideBarStyles from './SideBar.module.css'
export default function SideBar(props) {
    return (
        <section className={sideBarStyles.sideBar}>
      <ul>
        <li>
          <NavLink to="/feed">Feed</NavLink>
        </li>
        <li>
          <NavLink to="/music">Music</NavLink>
        </li>
        <li>
          <NavLink to="/Settings">Settings</NavLink>
        </li>
      </ul>
    </section>
    )
}
