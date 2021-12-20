import React, {useEffect} from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import HeaderContainer from './components/Header/HeaderContainer'
import SideBar from './components/SideBar/SideBar'
import ProfileContainer from './components/Profile/ProfileContainer'
import ChatContainer from "./components/Chat/ChatContainer"
import UsersContainer from './components/Users/UsersContainer'
import Login from './components/Login/LoginContainer'
import { initialize } from "./redux/reducers/appInitializer";
import CircularProgress from '@mui/material/CircularProgress';
import LogoutIcon from '@mui/icons-material/Logout';

import './App.css'


function App(props) {

  useEffect(()=>{
     props.initialize()
  }, []) 

if (props.isInitialized)
return (
     <Router>
      <div className={props.isLogged ? 'grid_container' : 'grid_container_unlogged'}>
        <HeaderContainer />
       {props.isLogged && <SideBar sideBarState = {props.state.SideBarPage}/>}
        <div className="mainContent_container">
          <Switch>
            <Route path="/profile/:userId?">
              <ProfileContainer/>
            </Route>
            <Route path="/messages">
              <ChatContainer/>
            </Route>
          <Route path="/users">
        <UsersContainer/>
          </Route>
          <Route path = "/login">
            <Login />
          </Route>
          </Switch>
        </div>
      </div>
    </Router>)

  else if(!props.isInitialized) 
  return (
  <div className='preloader_container_main'>
    <CircularProgress />
    </div> 
    )
}

const mapStateToProps = (state) => {
return {
  isInitialized:state.AppInitializer.isInitialized,
  isLogged: state.Auth.isLogged
}
}

export default connect(mapStateToProps,{initialize})(App);