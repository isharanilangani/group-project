import React from 'react'

import '../css/Popup.css';

const Popup = ({onclose}) => {
  return (
    <div class='popup'>
        <div class="popup-content">
            <div class='first'>
                <div class='name'>
                    <lable>Book Name</lable>
                    <lable>Book ID</lable>
                    <lable>Book Author</lable>
                    <lable>Category</lable>
                    <lable>Language</lable>
                </div>
                <div class='block'>
                    <input type='text'/>
                    <input type='text'/>
                    <input type='text'/>
                    <input type='text'/>
                    <input type='text'/>
                </div>
            </div>
            <div class='second'>   
            <button  class="submit-button" onClick={onclose}>Submit</button>   
            </div> 
        </div>
      
    </div>
  )
}

export default Popup

