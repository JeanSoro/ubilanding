import React, { useState } from 'react'
import games from '../games'

export default function Games() {
    const [gamePoster, setGamePoster] = useState(games)


    return (
        <>
            {
                gamePoster.map((game, index) => {
                    console.log(game)
                    return (
                        <article key={game.index}>
                            <img className="game-poster" src={game.image} alt="" />
                            <p className="game-title">{game.title}</p>
                            <p className="game-year">{game.year}</p>
                            <p className="game-year">{game.ps4_logo}</p>
                        </article>
                    )
                })
            }
        </>
    )
}
