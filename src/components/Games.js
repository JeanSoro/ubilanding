import React from 'react'

export default function Games({ title, year, image, xbox_logo, ps4_logo, windows_logo, stadia_logo, switch_logo }) {

    return (

        <article>
            <img className="game-poster" src={image} alt="game poster" />
            <p className="game-title">{title}</p>
            <p className="game-year">{year}</p>
            <div className="systems-container">
                {/* I have set up these conditionals because not all games have the same game system logos */}
                {
                    xbox_logo ? <img src={xbox_logo} className="system" alt='gaming system logo' /> : null
                }
                {
                    ps4_logo ? <img src={ps4_logo} className="system" alt="gaming system logo" /> : null
                }
                {
                    windows_logo ? <img src={windows_logo} className="system" alt="gaming system logo" /> : null
                }
                {
                    switch_logo ? <img src={switch_logo} className="system" alt="gaming system logo" /> : null
                }
                {
                    stadia_logo ? <img src={stadia_logo} className="system__stadia" alt="gaming system logo" /> : null
                }
            </div>
        </article>

    )
}
