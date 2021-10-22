import React from 'react'


export default function Games({ title, year, image, xbox_logo, ps4_logo, windows_logo, stadia_logo, switch_logo }) {

    return (

        <article>
            <img className="game-poster" src={image} alt="" />
            <p className="game-title">{title}</p>
            <p className="game-year">{year}</p>
            <div className="systems-container">
                <img src={xbox_logo} className="system" />
                <img src={ps4_logo} className="system" />
                <img src={windows_logo} className="system" />
                <img src={switch_logo} className="system" />
                {
                    stadia_logo ? <img src={stadia_logo} className="system__stadia" /> : null
                }
            </div>
        </article>

    )
}
