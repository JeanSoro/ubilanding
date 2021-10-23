import React, { useState } from 'react';
import Games from './Games';
import RoundedButton from './RoundedButton';
import gamesData from '../gamesData';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function MoreGames() {
    const [gamesShow, setGamesShow] = useState(gamesData);
    const newGamesShow = [...gamesShow];

    // Handler for getting previous set of video game cards
    const viewPrev = () => {
        if (newGamesShow.length - 1 > 0) {
            setGamesShow(newGamesShow.slice(5, 9))
        } else if (newGamesShow.length === 4 || newGamesShow.length === 0) {
            setGamesShow(gamesData)
        }
    }

    // Handler for getting next set of video game cards
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
                <button type="button" className="arrow-container">
                    <FaChevronLeft className="arrow" onClick={viewPrev} />
                </button>
                <div className="btn-container">
                    <RoundedButton btnText="view all games" />
                </div>
                <button type="button" className="arrow-container__right">
                    <FaChevronRight className="arrow" onClick={viewNext} />
                </button>
            </div>
        </section>
    )
}
