import React, { useState, useEffect } from "react";
import axios from "axios";
import "./exchanges.scss";
import "../Data/index";

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const exchangesPerPage = 10;

  useEffect(() => {
    axios
      .get("https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/exchanges")
      .then(async (res) => {
        console.log(res.data);
        console.log(exchanges);
        setExchanges(res.data.data.exchanges);
      })
      .catch((err) => console.log(err));
  }, []);

  const indexOfLastExchange = currentPage * exchangesPerPage;
  const indexOfFirstExchange = indexOfLastExchange - exchangesPerPage;
  const currentExchanges = exchanges.slice(
    indexOfFirstExchange,
    indexOfLastExchange
  );

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

  return exchanges.lenght > 0 ? (
    <div className="loading-spinner">
      <div className="spinner"></div>
      Loading...
    </div>
  ) : (
    <div className="app__exchanges">
      <table className="app__exchanges-content">
        <tbody>
          {currentExchanges.map((el) => (
            <tr className="app__exchanges-result" key={el.id}>
              <td>
                <img src={el.iconUrl} alt="exchange_img" />
              </td>
              <td>#{el.rank}</td>
              <td>{el.name}</td>
              <td style={{ fontWeight: "bolder" }}>
                ${" "}
                {parseFloat(el.price)
                  .toFixed(3)
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </td>
              <td>
                <a href={el.coinrankingUrl} target="_blank">
                  Open Exchange
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ul className="pagination">{renderPageNumbers()}</ul>
    </div>
  );
};

export default Exchanges;
