import React from 'react'

import '../css/Modal.css';

const Modal = (onSubmit,onClose) => {
  return (
    <div class='modal' onClick={() => onClose()}>
        <div class="modal-container" >
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
            <button  class="submit-button" onClick={() => onSubmit()}> Submit</button>   
            </div> 
        </div>
      
    </div>
  )
}

export default Modal


