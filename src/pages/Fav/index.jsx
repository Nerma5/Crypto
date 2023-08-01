import React, { useEffect, useState } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

const Fav = () => {
  const [favItems, setFavItems] = useState([]);

  useEffect(() => {
    // Retrieve saved items from sessionStorage
    const savedData = sessionStorage.getItem('savedData');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setFavItems(parsedData);
    }
  }, []);

  return (
    <div className="Fav">
      <h2>Favorites</h2>
      {favItems.length > 0 ? (
        <table className="coins-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>24h Volume</th>
              <th>Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {favItems.map((item) => (
              <tr key={item.uuid}>
                <td>
                  <Link to={`/coins/${item.uuid}?name=${encodeURIComponent(item.name)}`}>
                    {item.name}
                  </Link>
                </td>
                <td style={{ fontWeight: 'bold' }}>
                  ${parseFloat(item.price).toFixed(3).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </td>
                <td style={{ fontWeight: 'bold' }}>
                  ${parseFloat(item['24hVolume']).toLocaleString('en-US')}
                </td>
                <td style={{ fontWeight: 'bold' }}>
                  ${parseFloat(item.marketCap).toLocaleString('en-US')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No favorites found.</p>
      )}
    </div>
  );
};

export default Fav;