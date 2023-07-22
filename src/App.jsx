import './App.scss';
import Home from './pages/Home/index';
import Fav from './pages/Fav/index';
import Profile from './pages/Profile/index';
import Coins from './pages/Coins/index';
import Exchanges from './pages/Exchanges/index';
import About from './pages/About/index';
import Nav from './components/Nav/index';
import Footer from './components/Footer/index';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fav" element={<Fav />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/exchanges" element={<Exchanges />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
