import Header from './components/header'
import SideBar from './components/side-bar'
import Profile from './components/profile'
import './App.css';


function App() {
  return (
    <div className="App">
    <div className="grid-container">
      <Header/>
      <SideBar/>
      <Profile/>
    </div>
    </div>
  );
}

export default App;
