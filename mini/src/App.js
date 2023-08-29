
import './App.css';

import Notification from './component/Notification';
import Loginpage from './pages/Loginpage';

import Sidebarcode from './component/Sidebar';

function App() {
  return (
    <div className="App">
      <Notification/>
      <Loginpage/>
      <Sidebarcode/>
    </div>
  );
}

export default App;
