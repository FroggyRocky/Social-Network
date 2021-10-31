import React from 'react';
import sideBarStyles from './SideBar.module.css'
export default function SideBar() {
    return (
        <section className={sideBarStyles.sideBar}>
      <ul>
        <li><a href="/messages">Messages</a></li>
        <li><a href="/profile">Profile</a></li>
        <li><a href="/settings">Settings</a></li>
      </ul>
    </section>
    )
}
