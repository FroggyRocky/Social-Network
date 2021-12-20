import { useState } from 'react';
import {NavLink} from 'react-router-dom'
import headerStyles from './Header.module.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LoginIcon from '@mui/icons-material/Login';


export default function Header(props) {

const [optionsModule, toggleOptionsModule] = useState(true)

const logOut = () => {
  props.logOut();
}

const moreOptions = () => {
  toggleOptionsModule((prev) => {
    return !prev
  })
}

return (
    <header className={headerStyles.header}>
      <div className={headerStyles.img}>
        <img src="https://bbts1.azureedge.net/images/p/full/2017/09/8819c275-f982-4c5b-aa61-754f4c6a5402.png" alt=""/>
      </div>
{ props.auth.isLogged && <nav className={headerStyles.main_nav}>
<NavLink to='/messages'><EmailOutlinedIcon color="primary"/></NavLink>
<NavLink to={`/profile/${props.auth.id}`}><HomeOutlinedIcon color="primary"/></NavLink>
<NavLink to='/users'><PeopleAltOutlinedIcon color="primary"/></NavLink></nav>
}
    
    <div className={headerStyles.additional_nav}>
      {props.auth.isLogged ? <div>
        <span>{props.auth.login}</span>
        <div className={headerStyles.icon_moreOptions}>
        <NavLink to='/login' className={headerStyles.moreOptions} onClick={moreOptions}>
        <MoreVertIcon color="primary"/>
        </NavLink>
        </div>
        </div> 
        :
        <div className={headerStyles.icon_login}>
        <NavLink to='/login'>
      <LoginIcon color='primary' />
        </NavLink>
        </div>
         }
    </div>
    </header>
  )
}