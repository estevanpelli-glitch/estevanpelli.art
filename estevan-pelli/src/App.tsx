import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Info } from './pages/Info';
import { News } from './pages/News';
import { Texts } from './pages/Texts';
import { Paintings } from './pages/Paintings';
import { Exhibitions } from './pages/Exhibitions';
import { PhotoAlbum } from './pages/PhotoAlbum';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/news" element={<News />} />
        <Route path="/texts" element={<Texts />} />
        <Route path="/paintings" element={<Paintings />} />
        <Route path="/exhibitions" element={<Exhibitions />} />
        <Route path="/photo-album" element={<PhotoAlbum />} />
      </Routes>
    </Router>
  );
}

export default App;
