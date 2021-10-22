import React from 'react'
import Games from './Games'

export default function MoreGames() {
    return (
        <section className="more-games">
            <h1 className="section-title">Explore more games</h1>

            <div className="more-games__grid">
                <Games />
            </div>

            <div className="btn-container">
                <button type="button" className="btn-rounded">
                    view all games
                </button>
            </div>
        </section>
    )
}
