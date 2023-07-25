import React, { useState, useEffect } from "react";
import axios from "axios";
import "./exchanges.scss";
import "../Data/index";

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
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

  if (!exchanges || exchanges.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="app__exchanges">
      <div className="app__exchanges-content">
        {exchanges.map((el) => (
          <div className="app__exchanges-result" key={el.id}>
            <img src={el.iconUrl} alt="exchange_img" />
            <p>#{el.rank}</p>
            <p>{el.name}</p>
            <p style={{ fontWeight: "bolder" }}>
              ${" "}
              {parseFloat(el.price)
                .toFixed(3)
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </p>
            <a href={el.coinrankingUrl} target="_blank">
              Open Exchange
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exchanges;
