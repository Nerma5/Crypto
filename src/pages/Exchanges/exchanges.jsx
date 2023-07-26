import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './exchanges.scss';
import '../Data/index';

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const exchangesPerPage = 10; // Promijeni ovu vrijednost prema želji

  useEffect(() => {
    axios
      .get('https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/exchanges')
      .then(async (res) => {
        console.log(res.data);
        console.log(exchanges);
        setExchanges(res.data.data.exchanges);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!exchanges || exchanges.length === 0) {
    return <div>Loading...</div>;
  }

  const indexOfLastExchange = currentPage * exchangesPerPage;
  const indexOfFirstExchange = indexOfLastExchange - exchangesPerPage;
  const currentExchanges = exchanges.slice(indexOfFirstExchange, indexOfLastExchange);

  
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

 
  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(exchanges.length / exchangesPerPage); i++) {
      pageNumbers.push(
        <li key={i} onClick={() => paginate(i)}>
          {i}
        </li>
      );
    }
    return pageNumbers;
  };

  return (
    <div className='app__exchanges'>
      <div className='app__exchanges-content'>
        {currentExchanges.map((el) => (
          <div className='app__exchanges-result' key={el.id}>
            <img src={el.iconUrl} alt="exchange_img" />
            <p>#{el.rank}</p>
            <p>{el.name}</p>
            <p style={{ fontWeight: 'bolder' }}>$ {el.price}</p>
            <a href={el.coinrankingUrl} target='_blank'>Open Exchange</a>
          </div>
        ))}
      </div>
      <ul className="pagination">
        {renderPageNumbers()}
      </ul>
    </div>
  );
};

export default Exchanges;