import React from "react"
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
import './App.css'


class App extends React.Component {
  
  componentDidMount() {
    this.props.initialize()
  }


  render() { 
    if (this.props.isInitialized) return <Router>
      <div className="grid_container">
        <HeaderContainer />
        <SideBar sideBarState = {this.props.state.SideBarPage} />
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
    </Router>

  else if(!this.props.isInitialized) return <div className='preloader_container_main'>
    <CircularProgress />
    </div>
}}

const mapStateToProps = (state) => {
return {
  isInitialized:state.AppInitializer.isInitialized
}
}

export default connect(mapStateToProps,{initialize})(App)










