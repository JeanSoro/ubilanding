import React, { useState } from 'react'
import Games from './Games'
import games from '../games';

export default function MoreGames() {
    const [gamesShow, setGamesShow] = useState(games)
    const newGamesShow = [...gamesShow];
    console.log(newGamesShow)

    const viewNext = () => {
        if (newGamesShow.length - 1 > 0) {
            setGamesShow(newGamesShow.slice(5, 9))
        }
    }

    const viewPrev = () => {
        if (newGamesShow.length === 4 || newGamesShow.length === 0) {
            setGamesShow(games)
        }
    }

    return (
        <section className="more-games">
            <h1 className="section-title">Explore more games</h1>

            <div className="more-games__grid">

                {
                    newGamesShow.slice(0, 6).map((gamesList, index) => {
                        return (
                            <Games key={index} {...gamesList} />
                        )
                    })
                }
            </div>

            <div className="slider-controls">
                <div className="arrow" onClick={viewPrev}></div>
                <div className="btn-container">
                    <button type="button" className="btn-rounded">view all games</button>
                </div>
                <div className="arrow--right" onClick={viewNext}></div>
            </div>
        </section>
    )
}
