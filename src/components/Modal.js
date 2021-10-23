import React from 'react'


export default function Modal({ closeModal, ids, titles, images }) {


    return (
        <div className="modal">
            <div className="modal-content-wrapper">
                <button className="btn-close" onClick={closeModal}>X</button>
                <span className="btn-play">play</span>
                <h1 className="modal-content-title">{titles}</h1>
                <img src={images} alt="" />
            </div>
        </div>
    )
}
