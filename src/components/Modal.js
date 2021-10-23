import React from 'react';
import PropTypes from 'prop-types';
import playIcon from '../download.svg';

export default function Modal({ showModal, closeModal, featuredVideoTitle, featuredVideoPoster }) {


    return (
        <div className='modal'>
            <div className="modal-content-wrapper">
                <button className="btn-close" onClick={closeModal}>X</button>
                <img className="btn-play" src={playIcon} alt="play button icon" />
                <h1 className="modal-content-title">{featuredVideoTitle}</h1>
                <img className="modal-content-poster" src={featuredVideoPoster} alt="" />
            </div>
        </div>
    )
}


Modal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    showModal: PropTypes.bool.isRequired,
    featuredVideoTitle: PropTypes.string.isRequired,
    featuredVideoPoster: PropTypes.string.isRequired,
}