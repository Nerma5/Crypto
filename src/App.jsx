import './App.scss';
import Home from './pages/Home/index';
import Fav from './pages/Fav/index';
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
        <Route />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
