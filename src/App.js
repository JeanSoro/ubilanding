import './App.scss';
import { useState } from 'react';
import Header from './components/Header';
import MobileMenu from './components/MobileMenu';
import MoreGames from './components/MoreGames';
import FeaturedVideos from './components/FeaturedVideos';
import Modal from './components/Modal';

function App() {

  const [showModal, setShowModal] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [featuredVideoTitle, setFeaturedVideoTitle] = useState('');
  const [featuredVideoPoster, setFeaturedVideoPoster] = useState('');

  // Modal handlers
  const toggleModal = (id, title, image) => {
    setShowModal(prev => !prev);
    setFeaturedVideoTitle(title)
    setFeaturedVideoPoster(image)
  }

  const closeModal = () => {
    setShowModal(false)
  }


  // Mobile menu handlers
  const toggleMobileMenu = () => {
    setShowMobileMenu(prev => !prev)
  }

  const closeMobileMenu = () => {
    setShowMobileMenu(false);
  }


  return (
    <>
      <Header toggleMobileMenu={toggleMobileMenu} />
      <main>
        <MoreGames />
        <FeaturedVideos toggleModal={toggleModal} />
        {
          showModal ? <Modal featuredVideoPoster={featuredVideoPoster}
            featuredVideoTitle={featuredVideoTitle}
            closeModal={closeModal} showModal={showModal} /> : null
        }
        <MobileMenu showMobileMenu={showMobileMenu} closeMobileMenu={closeMobileMenu} />
      </main>
    </>
  );
}

export default App;
