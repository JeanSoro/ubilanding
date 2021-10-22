import React from 'react'
import Videos from './Videos'
import featuredVideosData from '../featuredVideosData';
import download from '../download.svg'


export default function FeaturedVideos() {
    return (
        <section className="featured-videos">
            <h1 className="section-title__featured">featured videos</h1>

            <div className="featured-videos__grid">
                {
                    featuredVideosData.map((featuredVideo, index) => {
                        return (
                            <Videos key={index} download={download} {...featuredVideo} />
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



