import React from 'react'

import '../css/Settings.css';
import Navigation from '../component/Navigationbar.jsx';
import Sidebarcode from '../component/Sidebar.jsx';
import Toggle from '../component/Switch';


export default function Settings() {
  return (
    <div class='fullpage'>
      <div  >
       <Sidebarcode/>
     </div>
    <div class='bars'>
      <div>
      <Navigation/>
      </div>
      <div class="content">
        <h1>Security</h1>
        <div class="FA">
            <Toggle/>   <h5>Two Factor Authentication (2FA)</h5>
       
        </div>
      </div>
    </div>
    </div>
  )
}
