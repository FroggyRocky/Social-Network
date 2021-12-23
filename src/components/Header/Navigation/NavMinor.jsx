import {NavLink} from 'react-router-dom'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LoginIcon from '@mui/icons-material/Login';
import headerStyles from '../Header.module.css'
export default function NavMinor(props) {


  return props.auth.isLogged ?
    <div className={`${headerStyles.nav_minor} ${headerStyles.nav_options}`}>
      <span><h4>{props.auth.login}</h4></span>
      <span className={headerStyles.icon_moreOptions}>
      <NavLink to='/login' className={headerStyles.moreOptions}>
      <MoreVertIcon fontSize='large' onClick={props.openModelWindowFn} color="primary"/>
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
