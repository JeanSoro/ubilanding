import './App.scss';
import React, { Suspense, useState } from 'react';
import Header from './components/Header';
import MoreGames from './components/MoreGames';
import FeaturedVideos from './components/FeaturedVideos';


const Modal = React.lazy(() => import('./components/Modal'));
const MobileMenu = React.lazy(() => import('./components/MobileMenu'));

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
          showModal ? <Suspense fallback={<div>Loading...</div>}>
            <Modal featuredVideoPoster={featuredVideoPoster}
              featuredVideoTitle={featuredVideoTitle}
              closeModal={closeModal} showModal={showModal} />
          </Suspense> : null
        }
        <Suspense fallback={<div>Loading menu...</div>}>
          <MobileMenu showMobileMenu={showMobileMenu} closeMobileMenu={closeMobileMenu} />
        </Suspense>
      </main>
    </>
  );
}

export default App;
