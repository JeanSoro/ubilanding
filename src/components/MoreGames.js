import React, { useState } from 'react';
import Games from './Games';
import RoundedButton from './RoundedButton';
import gamesData from '../gamesData';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function MoreGames() {
    const [gamesShow, setGamesShow] = useState(gamesData);

    // Handler for getting previous set of video game cards
    const viewPrev = () => {
        if (gamesShow.length - 1 > 0) {
            setGamesShow(gamesData)
        }
    }

    // Handler for getting next set of video game cards
    const viewNext = () => {
        if (gamesShow.length === 5 || gamesShow.length === 0) {
            setGamesShow(gamesData)
        } else if (gamesShow.length - 1 > 0) {
            setGamesShow(gamesShow.slice(5, 10))
        }
    }

    return (
        <section className="more-games">
            <header>
                <h1 className="section-title">Explore more games</h1>
            </header>
            <div className="more-games__grid">
                {
                    gamesShow.slice(0, 5).map((gamesList, index) => {
                        return (
                            <Games key={index} {...gamesList} />
                        )
                    })
                }
            </div>
            <div className="slider-controls">
                <button type="button" className="arrow-container" aria-label="Previous Arrow Button" onClick={viewPrev}>
                    <FaChevronLeft className="arrow" />
                </button>
                <div className="btn-container">
                    <RoundedButton btnText="view all games" />
                </div>
                <button type="button" className="arrow-container__right" aria-label="Next Arrow button" onClick={viewNext} >
                    <FaChevronRight className="arrow" />
                </button>
            </div>
        </section>
    )
}
