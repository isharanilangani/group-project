import React from 'react'
import  '../css/Sidebar.css';
import inquiry from '../images/Inquiry.png';
import assign from '../images/CourseAssign.png';
import account from '../images/Account.png';
import groups from '../images/Group.svg';
import setting from '../images/settings.svg';
import shutdown from '../images/Shutdown.png';

import {Link} from 'react-router-dom';

export default function Sidebar() {
  return (
    <div class='Sidebarstyle'>
      <p class='admin'>Admin</p>
      <Link to="/Bot_request">
      <button class='botrequestbox' id='button'>
       <img src={inquiry} alt='search' class='botrequesticon'/>
       <p class='botrequest'>Bot requests</p>
      </button>
      </Link>
      <Link to='/Book' >
      <button class='booksbox' id='button'>
      <img src={assign} alt='book' class='bookicon'/>
       <p class='books'>Books</p>
      </button>
      </Link>
      <Link to='/User'>
      <button class='userbox' id='button'>
      <img src={account} alt='user' class='usericon'/>
       <p class='users'>Users</p>
      </button>
      </Link>
      <Link to='/Check_in_out'>
      <button class='checkbox' id='button'>
      <img src={groups} alt='check' class='checkicon'/>
       <p class='checkinout'>Check In / Out</p>
      </button>
      </Link>
      <Link to='/Settings'>
      <button class='settingbox' id='button'>
      <img src={setting} alt='setting' class='settingicon'/>
       <p class='settings'>Settings</p>
      </button>
      </Link>
      <Link to='/Loginpage'>
      <button class='logoutbox' id='button'>
      <img src={shutdown} alt='logout' class='logouticon'/>
       <p class='logout'>Logout</p>
      </button>
      </Link>
        
    </div>
  )
}
