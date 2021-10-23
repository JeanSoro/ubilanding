import React from 'react'

export default function Videos({ download, id, title, image, toggleModal }) {

    return (
        <article className="video-wrapper" onClick={toggleModal ? () => toggleModal(id, title, image) : null}>
            <img className="video-play-icon" src={download} alt="play button icon" />
            <img className="video-poster" src={image} alt="featured videos poster" />
            <p className="video-title">{title}</p>
        </article>
    )

}
