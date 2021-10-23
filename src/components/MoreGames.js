import React, { useState } from 'react'
import Games from './Games'
import RoundedButton from './RoundedButton';
import gamesData from '../gamesData';

export default function MoreGames() {
    const [gamesShow, setGamesShow] = useState(gamesData)
    const newGamesShow = [...gamesShow];
 
    const viewPrev = () => {
        if (newGamesShow.length - 1 > 0) {
            setGamesShow(newGamesShow.slice(5, 9))
        } else if (newGamesShow.length === 4 || newGamesShow.length === 0) {
            setGamesShow(gamesData)
        }
    }

    const viewNext = () => {
        if (newGamesShow.length === 4 || newGamesShow.length === 0) {
            setGamesShow(gamesData)
        } else if (newGamesShow.length - 1 > 0) {
            setGamesShow(newGamesShow.slice(5, 9))
        }
    }

    return (
        <section className="more-games">
            <header>
                <h1 className="section-title">Explore more games</h1>
            </header>
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
                <button type="button" className="arrow" onClick={viewPrev}></button>
                <div className="btn-container">
                    <RoundedButton btnText="view all games" />
                </div>
                <button type="button" className="arrow--right" onClick={viewNext}></button>
            </div>
        </section>
    )
}
