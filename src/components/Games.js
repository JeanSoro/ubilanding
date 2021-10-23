import React from 'react'
import PropTypes from 'prop-types';

export default function Games({ title, year, image, xbox_logo, ps4_logo,
    windows_logo, stadia_logo, switch_logo }) {

    return (
        <article>
            <img className="game-poster" src={image} alt={title} />
            <p className="game-title">{title}</p>
            <p className="game-year">{year}</p>
            <div className="systems-container">
                {/* I have set up these conditionals because not all games have the same gaming system icon in the gamesData data structure */}
                {
                    xbox_logo ? <img src={xbox_logo} className="system" alt='gaming system icon' /> : null
                }
                {
                    ps4_logo ? <img src={ps4_logo} className="system" alt="gaming system icon" /> : null
                }
                {
                    windows_logo ? <img src={windows_logo} className="system" alt="gaming system icon" /> : null
                }
                {
                    switch_logo ? <img src={switch_logo} className="system" alt="gaming system icon" /> : null
                }
                {
                    stadia_logo ? <img src={stadia_logo} className="system__stadia" alt="gaming system icon" /> : null
                }
            </div>
        </article>

    )
}

Games.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    xbox_logo: PropTypes.string,
    ps4_logo: PropTypes.string,
    windows_logo: PropTypes.string,
    stadia_logo: PropTypes.string,
    switch_logo: PropTypes.string,
}

