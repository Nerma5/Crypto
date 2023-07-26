import './App.scss';
import Home from './pages/Home/index';
import Fav from './pages/Fav/index';
import Profile from './pages/Profile/index';
import Coins from './pages/Coins/index';
import Exchanges from './pages/Exchanges/exchanges';
import About from './pages/About/index';
import Nav from './components/Nav/index';
import Footer from './components/Footer/index';
import { Route, Routes } from 'react-router-dom';
import SingleCoin from './pages/SingleCoin';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: 'GET',
          url: 'https://coinranking1.p.rapidapi.com/coins',
          params: {
            referenceCurrencyUuid: 'yhjMzLPhuIDl',
            timePeriod: '24h',
            'tiers[0]': '1',
            orderBy: 'marketCap',
            orderDirection: 'desc',
            limit: '600',
            offset: '0',
          },
          headers: {
            'X-RapidAPI-Key':
              'cca8a610e8msh3412e54e4496bf1p1c57f2jsna0d7515e9c32',
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
          },
        };

        const response = await axios.request(options);
        setCoinData(response.data.data.coins);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fav" element={<Fav />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/coins" element={<Coins />} />
        <Route
          path="/coins/:uuid"
          element={<SingleCoin coinData={coinData} />}
        />
        <Route path="/exchanges" element={<Exchanges />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
