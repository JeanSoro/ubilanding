import React from 'react'

export default function Videos({ playIcon, id, title, poster, toggleModal }) {

    return (
        <article className="video-wrapper" onClick={() => toggleModal(id, title, poster)}>
            <img className="video-play-icon" src={playIcon} alt="play button icon" />
            <img className="video-poster" src={poster} alt="featured videos poster" />
            <p className="video-title">{title}</p>
        </article>
    )

}
