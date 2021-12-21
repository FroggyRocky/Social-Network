import { useState } from 'react';
import {NavLink} from 'react-router-dom'
import headerStyles from './Header.module.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LoginIcon from '@mui/icons-material/Login';

export default function Header(props) {

const [isModelWindowOn, toggleModelWindow] = useState(false)



const logOut = () => {
  props.logOut();
  toggleModelWindow(false) 
}

const openModelWindow = () => {
  toggleModelWindow(true)
}

const exitModelWindow = (e) => {
  if(e.target.className === headerStyles.modelWindow_container) {
    toggleModelWindow(false) 
  }
}



if(isModelWindowOn) return <div onClick={exitModelWindow} className={headerStyles.modelWindow_container}>
<div className={headerStyles.modelWindow_content}>
<div className={headerStyles.action_container}>
<button>Settings</button>
<button onClick={logOut}>Log Out</button>
</div>
</div>
</div>
return (
    <header className={headerStyles.header}>
      <div className={headerStyles.img}>
        <img src="https://bbts1.azureedge.net/images/p/full/2017/09/8819c275-f982-4c5b-aa61-754f4c6a5402.png" alt=""/>
      </div>
{ props.auth.isLogged && <nav className={headerStyles.nav_major}>
<NavLink to='/messages'><EmailOutlinedIcon color="primary"/></NavLink>
<NavLink to={`/profile/${props.auth.id}`}>
<HomeOutlinedIcon color="primary"/>
</NavLink>
<NavLink to='/users'>
<PeopleAltOutlinedIcon color="primary"/>
</NavLink></nav>
}
    
      {props.auth.isLogged ? 
      <div className={`${headerStyles.nav_minor} ${headerStyles.nav_options}`}>
        <span><h4>{props.auth.login}</h4></span>
        <span className={headerStyles.icon_moreOptions}>
        <NavLink to='/login' className={headerStyles.moreOptions} >
        <MoreVertIcon fontSize='large' onClick={openModelWindow} color="primary"/>
        </NavLink>
        </span>
</div>
        :
        <div className={`${headerStyles.nav_minor} ${headerStyles.nav_login}`}>
        <NavLink to='/login'>
      <LoginIcon color='primary' />
        </NavLink>
        </div>
         }
    </header>
  )
}