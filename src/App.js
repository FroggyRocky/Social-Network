import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header/Header'
import SideBar from './components/SideBar/SideBar'
import Profile from './components/Profile/Profile'
import ChatContainer from "./components/Chat/ChatContainer";
import Feed from './components/Feed/Feed'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import './App.css'

export default function App(props) {
  return (
    <Router>
      <div className="grid_container">
        <Header />
        <SideBar sideBarState = {props.state.SideBarPage} />
        <div className="mainContent_container">
          <Switch>
            <Route path="/profile">
              <Profile ProfilePage={props.state.ProfilePage}/>
            </Route>
            <Route path="/messages">
              <ChatContainer/>
            </Route>
            <Route path="/feed">
              <Feed />
            </Route>
            <Route path="/music">
              <Music />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
