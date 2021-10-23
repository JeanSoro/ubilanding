import React from 'react'
import Videos from './Videos'
import featuredVideosData from '../featuredVideosData';
import playIcon from '../download.svg'


export default function FeaturedVideos({ toggleModal }) {
    return (
        <section className="featured-videos">
            <h1 className="section-title__featured">featured videos</h1>

            <div className="featured-videos__grid">
                {
                    featuredVideosData.map((featuredVideoData, index) => {
                        return (
                            <Videos key={index}
                                playIcon={playIcon}
                                {...featuredVideoData}
                                toggleModal={toggleModal}
                            />
                        )
                    })
                }
            </div>

            <div className="btn-container">
                <button type="button" className="btn-rounded">
                    view all trailers
            </button>
            </div>
        </section>
    )
}



