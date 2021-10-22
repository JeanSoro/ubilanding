import React from 'react'
import Videos from './Videos'
import featuredVideosData from '../featuredVideosData';


export default function FeaturedVideos() {
    return (
        <section className="featured-videos">
            <h1 className="section-title__featured">featured videos</h1>

            <div className="featured-videos__grid">
                {
                    featuredVideosData.map((featuredVideo, index) => {
                        console.log(featuredVideo)
                        return (
                            <Videos key={featuredVideo.id} {...featuredVideo} />
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
