import React from 'react';
import PropTypes from 'prop-types';

export default function Videos({ playIcon, id, title, poster, toggleModal }) {
    return (
        <article className="video-wrapper" onClick={() => toggleModal(id, title, poster)}>
            <img className="video-play-icon" src={playIcon} alt="play button icon" />
            <img className="video-poster" src={poster} alt={title} />
            <p className="video-title">{title}</p>
        </article>
    )
}

Videos.propTypes = {
    poster: PropTypes.string.isRequired,
    playIcon: PropTypes.string.isRequired,
    id: PropTypes.number,
    title: PropTypes.string.isRequired,
    toggleModal: PropTypes.func.isRequired
}
