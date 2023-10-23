import React from 'react'
import maskgroup from '../images/Maskgroup.svg';
import liblogo from '../images/logo.svg';
import '../css/Loginpage.css';

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
<<<<<<< Updated upstream:mini/src/pages/Loginpage.jsx
        <input type="text" class="username" name="User Name" value=' Username'/>  
        <input  type="Password" class="password" name="Pass Word" value='Password'/>
=======
        <input type="text" class="username" placeholder='Username' />  
        <input  type="Password" class="password" placeholder='Password' />
>>>>>>> Stashed changes:src/pages/Loginpage.jsx
          <button type="submit" class='submit' onclick="document.getElementById('Bot_request.jsx').innerHTML = Date()">
            Submit
          </button>
       
        </form>
        
        
        


      </div>
      
      
      
        
        
      
      
    
    </div>
  )
}
