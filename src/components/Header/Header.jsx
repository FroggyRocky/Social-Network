import {NavLink} from 'react-router-dom'
import headerStyles from './Header.module.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';

export default function Header(props) {

function logOut() {
  props.logOut();
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
        <NavLink to='/login' className={headerStyles.logout} onClick={logOut}> - Logout</NavLink>
        </div> 
        :
        <NavLink to='/login'> - Login</NavLink>
         }
    </div>
    </header>
  )
}