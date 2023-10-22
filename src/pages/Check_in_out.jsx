import React from 'react'

import '../css/Check_in_out.css';
import Navigation from '../component/Navigationbar.jsx';
import Sidebarcode from '../component/Sidebar.jsx';

export default function Check_in_out() {
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
                <th id='username'>User</th>
                <th>User Id</th>
                <th>Book Name</th>
                <th>Book ID</th>
                <th>Issue Date</th>
                <th>Return Date</th>
                <th>Extend</th>
              </tr>
              <tr class='user1' id='users'>
                <td>Deshani K.</td>
                <td>UI_0055</td>
                <td>Bana katha 100</td>
                <td>nov_0055</td>
                <td>2023 / 08 / 18 </td>
                <td>2023 / 09 / 01 </td>
                <td>5 days</td>
                
            </tr>
            <tr class='user2' id='users'>
                <td>Dulaj Mithun</td>
                <td>UI_0059</td>
                <td>MadoL Dooowa</td>
                <td>nov_0005</td>
                <td>2023 / 08 / 09 </td>
                <td>2023 / 08 / 23 </td>
                <td class="ignorerequest">Ignore</td>
            </tr>
            <tr class='user3' id='users'>
                <td>Deelaka Silva</td>
                <td>UI_0060</td>
                <td>Virahawa</td>
                <td>nov_0002</td>
                <td>2023 / 08 / 01 </td>
                <td>2023 / 08 / 18 </td>
                <td>3 days</td>
            </tr>
            <tr class='user5' id='users'>
                <td>Ishara Dabare</td>
                <td>UI_0061</td>
                <td>Emma</td>
                <td>otr_0340</td>
                <td>2023 / 07 / 28 </td>
                <td>2023 / 08 / 11 </td>
                <td>   </td>
            </tr>   
            <tr class='user6' id='users'>
                <td>Niluka Dias</td>
                <td>UI_0062</td>
                <td>Baby Names</td>
                <td>otr_0599</td>
                <td>2023 / 07 / 28 </td>
                <td>2023 / 08 / 15 </td>
                <td> 4 days </td>
            </tr>   
        </table>
    </div>   
    </div>
    </div>
  )
}