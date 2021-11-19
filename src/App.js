import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header/Header'
import SideBar from './components/SideBar/SideBar'
import Profile from './components/Profile/Profile'
import ChatContainer from "./components/Chat/ChatContainer";
import UsersContainer from './components/Users/UsersContainer'
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
          <Route path="/users">
        <UsersContainer/>
          </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
