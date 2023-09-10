import React from 'react'
import  '../css/Sidebar.css';
import shutdownimage from  '../images/Shutdown.png';


export default function Sidebar() {
  return (
    <div class='Sidebarstyle'>
        <p class='admintext'>Admin</p>
        <div class='botrequestbox'>
          <div class="botmark">
            
          </div>
          <div class='botrequest'>
            <p>Bot requests</p>
          </div>
        </div>
        <div class='logoutbox'>
            <div class='shutdownimg'>
              <img src={shutdownimage} alt='Shutdown' />
            </div>
            <div class='logout' >
              <p>Logout</p>
            </div>
            
        </div>
    </div>
  )
}
