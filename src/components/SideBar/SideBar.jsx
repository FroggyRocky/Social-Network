import React from 'react';
import {Link} from "react-router-dom";
import sideBarStyles from './SideBar.module.css'
export default function SideBar() {
    return (
        <section className={sideBarStyles.sideBar}>
      <ul>
        <li>
          <Link to="/profile">Profile</Link>
          </li>
        <li>
             <Link to="/messages">Messages</Link>
        </li>
        <li>
          <Link to="/feed">Feed</Link>
        </li>
        <li>
          <Link to="/music">Music</Link>
        </li>
        <li>
          <Link to="/Settings">Settings</Link>
        </li>
      </ul>
    </section>
    )
}
