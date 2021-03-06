import React from 'react'
import { useGlobalContext } from '../context'
import { AiOutlineClose } from 'react-icons/ai';
const Modal = () => {
    const { showModal, closeModal, modalOverlayRef, closeOnOverlayClick } = useGlobalContext();
    return (
        <div onClick={closeOnOverlayClick} ref={modalOverlayRef} className={`modal-overlay ${showModal ? 'show-modal' : null}`}>
            <div className='modal-container'>
                <h3>Modal content</h3>
                <button onClick={() => closeModal()} className="close-modal-btn"><AiOutlineClose /></button>
            </div>

        </div>
    )
}

export default Modal
