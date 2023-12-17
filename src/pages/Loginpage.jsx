import React from 'react'
import maskgroup from '../images/Maskgroup.svg';
import liblogo from '../images/logo.svg';
import '../css/Loginpage.css';

import {Link} from 'react-router-dom';

export default function Loginpage() {
  return (
    <div class='loginpage'>
      <div class='loginimage'>
        <img src={maskgroup} alt='loginpic'/>
      </div>
      <div class='loginform'>
        <img src={liblogo} alt='logo' class='image'/>
        <p class='admin'>Admin</p>
        <form class='form'>
        <input type="text" class="username" name="User Name" />  
        <input  type="Password" class="password" name="Pass Word" />
          <Link to="/Bot_request">
          <button type="submit" class='submit' onclick="document.getElementById('Bot_request.jsx').innerHTML = Date()">
            Submit
          </button>
          </Link>
        </form>
      </div> 
    
    </div>
  )
}
