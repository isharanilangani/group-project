import React from 'react'
import  '../css/Sidebar.css';
import inquiry from '../images/Inquiry.png';
import assign from '../images/CourseAssign.png';
import account from '../images/Account.png';
import groups from '../images/Group.svg';
import setting from '../images/settings.svg';
import shutdown from '../images/Shutdown.png';

export default function Sidebar() {
  return (
    <div class='Sidebarstyle'>
      <p class='admin'>Admin</p>
      <div class='botrequestbox'>
       <img src={inquiry} alt='search' class='botrequesticon'/>
       <p class='botrequest'>Bot requests</p>
      </div>
      <div class='booksbox'>
      <img src={assign} alt='book' class='bookicon'/>
       <p class='books'>Books</p>
      </div>
      <div class='userbox'>
      <img src={account} alt='user' class='usericon'/>
       <p class='users'>Users</p>
      </div>
      <div class='checkbox'>
      <img src={groups} alt='check' class='checkicon'/>
       <p class='checkinout'>Check In / Out</p>
      </div>
      <div class='settingbox'>
      <img src={setting} alt='setting' class='settingicon'/>
       <p class='settings'>Settings</p>
      </div>
      <div class='logoutbox'>
      <img src={shutdown} alt='logout' class='logouticon'/>
       <p class='logout'>Logout</p>
      </div>
        
    </div>
  )
}
