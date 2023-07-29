import React, { useEffect, useState } from 'react';
import './index.scss';
import axios from 'axios';
import { FavoriteOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { Footer } from '@mantine/core';

const Fav = () => {
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
      {currentItems.length > 0 ? (
        <div>
          <table className="coins-table">
            <tbody>
              {currentItems.map((coin, index) => (
                <tr key={coin.uuid}>
                  <td>
                    <Link
                      to={`/coins/${coin.uuid}?name=${encodeURIComponent(
                        coin.name
                      )}`}
                    >
                      <img
                        width="50"
                        height="50"
                        src={coin.iconUrl}
                        alt={coin.name}
                      />
                    </Link>
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No data found.</p>
      )}
      <Footer />
    </div>
  );
}

export default Fav