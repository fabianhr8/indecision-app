import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleCloseModal}    // Modal can be closed when clicking ESC or outside of it
        contentLabel='Selected Option'            // This is for people with disabilities
        closeTimeoutMS={200}                       // The time the modal will wait before closing
        className='modal'
    >
        <h3 className='modal__title'>Selected Option</h3>
        <p className='modal__body'>{props.selectedOption}</p>
        <button className='button' onClick={props.handleCloseModal}>Okay</button>
    </Modal>
);

export default OptionModal;