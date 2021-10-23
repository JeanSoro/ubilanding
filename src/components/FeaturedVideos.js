import React from 'react';
import PropTypes from 'prop-types';
import Videos from './Videos';
import RoundedButton from './RoundedButton';
import featuredVideosData from '../featuredVideosData';
import playIcon from '../download.svg';


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
                <RoundedButton btnText="view all trailers" />
            </div>
        </section>
    )
}

FeaturedVideos.propTypes = {
    toggleModal: PropTypes.func.isRequired
}

