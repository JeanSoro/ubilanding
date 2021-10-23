import './App.scss';
import { useState } from 'react';
import Header from './components/Header';
import MoreGames from './components/MoreGames';
import FeaturedVideos from './components/FeaturedVideos';
import Modal from './components/Modal';

function App() {

  const [showModal, setShowModal] = useState(false);
  const [featuredVideoTitle, setFeaturedVideoTitle] = useState('');
  const [featuredVideoPoster, setFeaturedVideoPoster] = useState('');

  const toggleModal = (id, title, image) => {
    setShowModal(prev => !prev);
    setFeaturedVideoTitle(title)
    setFeaturedVideoPoster(image)
  }

  const closeModal = () => {
    setShowModal(false)
  }


  return (
    <>
      <Header />
      <main>
        <MoreGames />
        <FeaturedVideos toggleModal={toggleModal} />
        {
          showModal ? <Modal featuredVideoPoster={featuredVideoPoster} featuredVideoTitle={featuredVideoTitle} closeModal={closeModal} showModal={showModal} /> : null
        }
      </main>
    </>
  );
}

export default App;
