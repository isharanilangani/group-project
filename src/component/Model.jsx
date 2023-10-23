import React from 'react'

import '../css/Model.css';

const Model = (onSubmit,onClose) => {
  return (
    <div class='model' onClick={() => onClose()}>
        <div class="model-container" >
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

export default Model


