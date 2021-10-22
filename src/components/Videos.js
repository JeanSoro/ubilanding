import React from 'react'


export default function Videos({ id, title, image }) {
    return (
        <article className="video-wrapper">
            <img className="video-poster" src={image} alt="" />
            <p className="video-title">{title}</p>
        </article>
    )
}
