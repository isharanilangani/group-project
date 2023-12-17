import {BrowserRouter , Routes, Route  } from 'react-router-dom';
import './App.css';

// import Navigation from './component/Navigationbar';
import Loginpage from './pages/Loginpage';
import Botrequestcode from './pages/Bot_request';
// import Sidebarcode from './component/Sidebar';
 //import Content from './component/Content';
import Bookpage from './pages/Book';
//import Modal from './component/Modal';
import User from './pages/User';
import Check from './pages/Check_in_out';
import Settings from './pages/Settings';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loginpage />}/>
        <Route path="/Botrequestcode" element={<Botrequestcode/>} />
        <Route path="/Bookpage" element={<Bookpage/>}/>
        <Route path="/User" element={<User/>}/>
        <Route path="/Check" element={<Check/>}/>
        <Route path="/Settings" element={<Settings/>}/> 
        
      </Routes>
      </BrowserRouter> 
    
    </div>
  );
}

export default App;
