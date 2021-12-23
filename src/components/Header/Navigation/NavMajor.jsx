import {NavLink} from 'react-router-dom'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import headerStyles from '../Header.module.css'

export default function NavMajor(props) {

    return <nav className={headerStyles.nav_major}>
    <NavLink to='/messages'>
    <EmailOutlinedIcon color="primary"/>
    </NavLink>
    <NavLink to={`/profile/${props.auth.id}`}>
    <HomeOutlinedIcon color="primary"/>
    </NavLink>
    <NavLink to='/users'>
    <PeopleAltOutlinedIcon color="primary"/>
    </NavLink></nav>
}