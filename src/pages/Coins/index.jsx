import React, { useEffect, useState } from 'react';
import './index.scss';
import SearchBar from '../../components/SearchBar/index';
import { Pagination } from '@mui/material';
import axios from 'axios';
import { Calculate, FavoriteOutlined } from '@mui/icons-material';

const Coins = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const maxCoinsToShow = 100;

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
      'X-RapidAPI-Key': 'cca8a610e8msh3412e54e4496bf1p1c57f2jsna0d7515e9c32',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    },
  };

  const fetchData = async () => {
    try {
      const response = await axios.request(options);
      setData(response.data.data.coins);
      setFilteredData(response.data.data.coins.slice(0, maxCoinsToShow));
    } catch (err) {
      setData([]);
      setFilteredData([]);
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (searchQuery === '') {
      setFilteredData(data.slice(0, maxCoinsToShow));
    } else {
      const filteredCoins = data.filter(coin =>
        coin.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredData(filteredCoins);
    }
    setCurrentPage(1);
  }, [data, searchQuery]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <div className="Coins">
      <SearchBar searchQuery={searchQuery} onChange={setSearchQuery} />
      {currentItems.length > 0 ? (
        <div>
          <table className="coins-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th></th>
                <th>Name</th>
                <th>Price</th>
                <th>24h Volume</th>
                <th>Market Cap</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((coin, index) => (
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
          <Pagination
            count={Math.ceil(filteredData.length / itemsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              margin: '20px 0',
            }}
            shape="rounded"
            color="primary"
            showFirstButton
            showLastButton
          />
        </div>
      ) : (
        <p>No data found.</p>
      )}
    </div>
  );
};

export default Coins;
