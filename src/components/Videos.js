import React from 'react'

export default function Videos({ download, id, title, image }) {
    return (
        <article className="video-wrapper">
            <img className="video-play-icon" src={download} alt="" />
            <img className="video-poster" src={image} alt="" />
            <p className="video-title">{title}</p>
        </article>
    )
}
