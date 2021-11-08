import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header/Header'
import SideBar from './components/SideBar/SideBar'
import Profile from './components/Profile/Profile'
import Messages from "./components/Messages/Messages"
import Feed from './components/Feed/Feed'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import './App.css'
function App(props) {
  return (
    <Router>
      <div className="grid_container">
        <Header />
        <SideBar friends = {props.data.sideBar} />
        <div className="mainContent_container">
          <Switch>
            <Route path="/profile">
              <Profile addPost={props.addPost} posts = {props.data.posts}/>
            </Route>
            <Route path="/messages">
              <Messages
               addMessage={props.addMessage}
               dialogues = {props.data.dialogues} 
               messages = {props.data.messages}/>
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
