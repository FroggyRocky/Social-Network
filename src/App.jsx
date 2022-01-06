import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import HeaderContainer from "./components/Header/HeaderContainer";
import SideBar from "./components/SideBar/SideBar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Login from "./components/Login/LoginContainer";
import { initialize } from "./redux/reducers/appInitializer";
import CircularProgress from "@mui/material/CircularProgress";
import Preloader from './components/common/Preloader/Preloader'
import "./App.css";

const UsersContainer = React.lazy(() => {
  return import("./components/Users/UsersContainer");
});

const ChatContainer = React.lazy(() => {
  return import("./components/Chat/ChatContainer");
});

function App(props) {
  useEffect(() => {
    props.initialize();
  }, []);
  if (props.isInitialized)
    return (
      <Router>
        <div
          className={
            props.isLogged ? "grid_container_logged" : "grid_container_unlogged"
          }
        >
          <HeaderContainer />
          {props.isLogged && <SideBar />}
          <div className="mainContent_container">
            <Switch>
              <Route path="/profile/:userId?">
                <ProfileContainer />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <React.Suspense fallback={<Preloader />}>
                <Route path="/messages">
                  <ChatContainer />
                </Route>
                <Route path="/users">
                  <UsersContainer />
                </Route>
              </React.Suspense>
             
            </Switch>
          </div>
        </div>
      </Router>
    );
  else if (!props.isInitialized)
    return (
      <div className="preloader_container_main">
        <CircularProgress />
      </div>
    );
}

const mapStateToProps = (state) => {
  return {
    isInitialized: state.AppInitializer.isInitialized,
    isLogged: state.Auth.isLogged,
  };
};

export default connect(mapStateToProps, { initialize })(App);
