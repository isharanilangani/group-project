import React from 'react'

import '../css/User.css';
import Navigation from '../component/Navigationbar.jsx';
import Sidebarcode from '../component/Sidebar.jsx';
import wrong from '../images/wrong.png';

export default function User() {
  return (
    <div class="fullpage">
      <div  >
       <Sidebarcode/>
     </div>
    <div class='bars'>
      <div>
      <Navigation/>
      </div>
      <div class='content'>
            <table>
              <tr class='title' >
                <th id='username'>Name</th>
                <th>Library Id</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Password</th>
                <th></th>
              </tr>
              <tr class='user1' id='users'>
                <td>Deshani K.</td>
                <td>UI_0055</td>
                <td>kdeshani900@gmail.com</td>
                <td>077 6645393</td>
                <td>************</td>
                <td class='button'>
                    <button class='ignore'> <img src={wrong} alt='wrong' class='imagewrong'/> Delete</button>
                </td>
            </tr>
            <tr class='user2' id='users'>
                <td>Dulaj Mithun</td>
                <td>UI_0059</td>
                <td>mithundulaj345@gmail.com</td>
                <td>076 4598721</td>
                <td>**************</td>
                <td>
                    <button class='ignore'> <img src={wrong} alt='wrong' class='imagewrong'/> Delete</button>
                </td>
            </tr>
            <tr class='user3' id='users'>
                <td>Deelaka Silva</td>
                <td>UI_0060</td>
                <td>deelakasilva456@gmail.com</td>
                <td>071 5693309</td>
                <td>**************</td>
                <td>
                    <button class='ignore'> <img src={wrong} alt='wrong' class='imagewrong'/> Delete</button>
                </td>
            </tr>
            <tr class='user5' id='users'>
                <td>Ishara Dabare</td>
                <td>UI_0061</td>
                <td>israhadabare234@gmail.com</td>
                <td>070 5691023</td>
                <td>**********</td>
                <td>
                    <button class='ignore'> <img src={wrong} alt='wrong' class='imagewrong'/> Delete</button>
                </td>
            </tr>   
            <tr class='user6' id='users'>
                <td>Niluka Dias</td>
                <td>UI_0062</td>
                <td>diasniluka123@gmail.com</td>
                <td>075 6923456</td>
                <td>********</td>
                <td>
                    <button class='ignore'> <img src={wrong} alt='wrong' class='imagewrong'/> Delete </button>
                </td>
            </tr>   

        </table>

    </div>
      
    </div>

    </div>
  )
}
