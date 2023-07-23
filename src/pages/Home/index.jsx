import React, { useEffect, useState } from 'react';
import './index.scss';
import SearchBar from '../../components/SearchBar';
import axios from 'axios';
import { FavoriteOutlined, Calculate } from '@mui/icons-material';
import image from './crypto_set.jpg';

const Home = () => {
  const [data, setData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const options = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod: '24h',
      'tiers[0]': '1',
      orderBy: 'marketCap',
      orderDirection: 'desc',
      limit: '50',
      offset: '0',
    },
    headers: {
      'X-RapidAPI-Key': 'cca8a610e8msh3412e54e4496bf1p1c57f2jsna0d7515e9c32',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    },
  };

  const fetchData = async () => {
    try {
      const response = await axios.request(options);
      setAllData(response.data.data.coins);
    } catch (err) {
      setData([]);
      console.log(err);
    }
  };

  const updateSearchQuery = searchQuery => {
    setSearchQuery(searchQuery);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (allData) {
      if (searchQuery === '') {
        setData(allData?.slice(0, 10) || []);
      } else {
        const filteredData = allData.filter(coin =>
          coin.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setData(filteredData);
      }
    }
  }, [searchQuery, allData]);

  return (
    <div className="Home">
      <img className="Home-image" src={image} alt="" />
      <SearchBar searchQuery={searchQuery} onChange={updateSearchQuery} />
      <h2 style={{ margin: '24px 0' }}>
        Top 10 <span style={{ color: 'red' }}>List</span>
      </h2>
      {data.length > 0 ? (
        <table className="coins-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>24h Volume</th>
              <th>Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {data.map((coin, index) => (
              <tr key={coin.uuid}>
                <td>{coin.rank}</td>
                <td>
                  <img
                    width="50"
                    height="50"
                    src={coin.iconUrl}
                    alt={coin.name}
                  />
                </td>
                <td className="coin-name">{coin.name}</td>
                <td style={{ fontWeight: 'bold' }}>
                  $
                  {parseFloat(coin.price)
                    .toFixed(3)
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </td>
                <td style={{ fontWeight: 'bold' }}>
                  ${parseFloat(coin['24hVolume']).toLocaleString('en-US')}
                </td>
                <td style={{ fontWeight: 'bold' }}>
                  ${parseFloat(coin.marketCap).toLocaleString('en-US')}
                </td>
                <td>
                  <FavoriteOutlined className="fav" />
                </td>
                <td>
                  <Calculate className="calculate" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data found.</p>
      )}
    </div>
  );
};

export default Home;
