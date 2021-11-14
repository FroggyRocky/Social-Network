import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header/Header'
import SideBar from './components/SideBar/SideBar'
import Profile from './components/Profile/Profile'
import Chat from "./components/Chat/Chat"
import Feed from './components/Feed/Feed'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import './App.css'
function App(props) {
  return (
    <Router>
      <div className="grid_container">
        <Header />
        <SideBar sideBarState = {props.data.SideBarPage} />
        <div className="mainContent_container">
          <Switch>
            <Route path="/profile">
              <Profile 
               ProfilePageState = {props.data.ProfilePage}
               dispatch={props.dispatch}
               />
            </Route>
            <Route path="/messages">
              <Chat
               ChatPageState = {props.data.ChatPage}
               dispatch={props.dispatch}
               />
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

export default App;
