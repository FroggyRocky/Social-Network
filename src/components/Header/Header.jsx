import React from 'react';
import headerStyles from './Header.module.css'
export default function Header() {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.img}>
        <img src="https://bbts1.azureedge.net/images/p/full/2017/09/8819c275-f982-4c5b-aa61-754f4c6a5402.png" alt="" srcset="" />
      </div>
    <div className={headerStyles.nav}>
<span>Login</span>
<span>Register</span>
    </div>
    </header>
  )
}