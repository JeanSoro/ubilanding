import './App.scss';
import Header from './components/Header';
import MoreGames from './components/MoreGames';
import FeaturedVideos from './components/FeaturedVideos';


function App() {
  return (
    <>
      <Header />
      <main>
        <MoreGames />
        <FeaturedVideos />
      </main>

    </>
  );
}

export default App;
