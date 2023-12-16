import React, { useState } from 'react'
import '../css/Modal.css';

export const Modal=({openmodal,setOpenModal}) => {
    const [input,setInput] = useState("");

  return (
    <div class='modal'>
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
                    <input type='text' onChange={(event) => setInput(input)}/>
                    <input type='text' onChange={(input) => setInput(input)}/>
                    <input type='text'onChange={(input) => setInput(input)}/>
                    <input type='text'onChange={(input) => setInput(input)}/>
                    <input type='text'onChange={(input) => setInput(input)}/>
                </div>
            </div>
            <div class='second'>   
            <button  class="submit-button" onClick={() =>{
                setOpenModal(false);
            }}> Submit</button>   
            </div> 
        </div>
      
    </div>
  )
}

export default Modal



