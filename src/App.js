import Header from './components/Header/Header'
import SideBar from './components/SideBar/SideBar'
import Profile from './components/Profile/Profile'
import Messages from "./components/Messages/Messages"
import './App.css'
function App() {
  return (
    <div className="grid_container">
      <Header />
      <SideBar />
        <div className="mainContent-container">
         <Profile />
         <Messages />
       </div>
    </div>
  );
}

export default App;
