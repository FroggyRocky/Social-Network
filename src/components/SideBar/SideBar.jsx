import React from 'react';
import sideBarStyles from './SideBar.module.css'
export default function SideBar() {
    return (
        <section className={sideBarStyles.sideBar}>
      <ul>
        <li>Messages</li>
        <li>Profile</li>
        <li>Settings</li>
      </ul>
    </section>
    )
}
