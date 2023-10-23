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
        <table>
            <tr>
                <td><Toggle/></td>
                <td class="FA">Two Factor Authentication (2FA)</td>
            </tr>  
        </table>
        <table>
          <tr>
            <input type="text" placeholder='Recovery email' class="inputemail"/>
            <button type="submit" class="verify"> Verify</button>
          </tr>
        </table>
        <hr/>
        <h1>Credentials</h1>
        <div class="credentials">
          <div class="email">
            <input type="text" placeholder='Email' id="updatepart"/>
            <input type="password" placeholder='Password' id="updatepart"/>
            <button type="submit" id="confirmpart">Update</button>
          </div>
          <div class="password">
            <input type="password" placeholder='Current password' id="updatepart" />
            <input type="password" placeholder='Newpassword' id="updatepart" />
            <input type="password" placeholder='Confirm New Password' id="updatepart"/>
            <button type="submit" id="confirmpart">Update</button>
          </div>
        </div>
        
      </div>
    </div>
    </div>
  )
}
