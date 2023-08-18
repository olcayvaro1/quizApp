import React from 'react'
import './Modal.css';

const Modal = ({score}) => {
  return (
    <div className='modal' >
    <div className='modal-score'>Skor : {score}</div>
    <div onClick={() => window.location = "/"} className='modal-btn'>
        Yeniden başla
    </div>
    </div> 
  )
}

export default Modal