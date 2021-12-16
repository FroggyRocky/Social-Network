import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeaderContainer from './components/Header/HeaderContainer'
import SideBar from './components/SideBar/SideBar'
import ProfileContainer from './components/Profile/ProfileContainer'
import ChatContainer from "./components/Chat/ChatContainer"
import UsersContainer from './components/Users/UsersContainer'
import Login from './components/Login/LoginContainer'
import './App.css'

export default function App(props) {
  return (
    <Router>
      <div className="grid_container">
        <HeaderContainer />
        <SideBar sideBarState = {props.state.SideBarPage} />
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
  );
}
