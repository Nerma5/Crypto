import React, { useEffect } from 'react';
import './index.scss';
import { NavLink, useParams } from 'react-router-dom';
import chart from './single-line-chart.png';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import BarChartIcon from '@mui/icons-material/BarChart';
import EggIcon from '@mui/icons-material/Egg';
import WaterIcon from '@mui/icons-material/Water';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import LinkIcon from '@mui/icons-material/Link';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import RedditIcon from '@mui/icons-material/Reddit';
import YouTubeIcon from '@mui/icons-material/YouTube';

const SingleCoin = ({ coinData }) => {
  console.log('coinData:', coinData);

  const { uuid } = useParams();

  if (!coinData) {
    return <p>Loading...</p>;
  }

  const coin = coinData.find(coin => coin.uuid === uuid);

  if (!coin) {
    return <p>Invalid coin UUID.</p>;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="SingleCoin">
      <div className="header">
        <div>
          <p>{coin.rank}</p>
          <img src={coin.iconUrl} alt="" width="50" height="50" />
          <p style={{ fontWeight: 'bold' }}>{coin.name}</p>
          <p>{coin.symbol}</p>
          <p style={{ fontWeight: 'bold' }}>
            $
            {parseFloat(coin.price)
              .toFixed(3)
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </p>
        </div>
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/exchanges">Exchanges</NavLink>
        </div>
      </div>
      <div className="price-chart">
        <p style={{ fontWeight: 'bold' }}>Price Chart</p>
        <p>
          24h <span style={{ color: 'green' }}>{coin.change}%</span>
        </p>
        <p>
          High{' '}
          <span style={{ fontWeight: 'bold' }}>
            $
            {parseFloat(coin.price)
              .toFixed(3)
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </span>
        </p>
      </div>
      <img className="chart" src={chart} alt="" />
      <div className="more-info">
        <div className="value-stats">
          <h2>Value statistics</h2>
          <p style={{ color: '#666666', width: '75%', margin: '18px auto' }}>
            An overview showing the statistics of {coin.name}, such as the base
            and quote currency the rank, and trading volume.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              justifyItems: 'center',
              borderBottom: '2px solid lightblue',
              padding: '30px 0 12px 0',
            }}
          >
            <MonetizationOnIcon />
            <p>Price to EUR</p>
            <p style={{ fontWeight: 'bold' }}>{coin.price}</p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              justifyItems: 'center',
              borderBottom: '2px solid lightblue',
              padding: '30px 0 12px 0',
            }}
          >
            <CurrencyBitcoinIcon />
            <p>Price to BTC</p>
            <p style={{ fontWeight: 'bold' }}>${coin.btcPrice} BTC</p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              justifyItems: 'center',
              borderBottom: '2px solid lightblue',
              padding: '30px 0 12px 0',
            }}
          >
            <BarChartIcon />
            <p>Rank</p>
            <p style={{ fontWeight: 'bold' }}>#{coin.rank}</p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              justifyItems: 'center',
              borderBottom: '2px solid lightblue',
              padding: '30px 0 12px 0',
            }}
          >
            <EggIcon />
            <p>24h Volume</p>
            <p style={{ fontWeight: 'bold' }}>
              ${parseFloat(coin['24hVolume']).toLocaleString('en-US')}
            </p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              justifyItems: 'center',
              borderBottom: '2px solid lightblue',
              padding: '30px 0 12px 0',
            }}
          >
            <WaterIcon />
            <p>Market cap</p>
            <p style={{ fontWeight: 'bold' }}>${coin.marketCap}</p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              justifyItems: 'center',
              borderBottom: '2px solid lightblue',
              padding: '30px 0 12px 0',
            }}
          >
            <WaterIcon />
            <p>Fully diluted market cap</p>
            <p style={{ fontWeight: 'bold' }}>${coin.marketCap / 100}</p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              justifyItems: 'center',
              borderBottom: '2px solid lightblue',
              padding: '30px 0 12px 0',
            }}
          >
            <BeenhereIcon />
            <p>All-time high (daily avg.)</p>
            <p style={{ fontWeight: 'bold' }}>${coin.marketCap / 100}</p>
          </div>

          <div>
            <h4
              style={{
                textAlign: 'center',
                marginTop: '60px',
                marginBottom: '12px',
              }}
            >
              What is {coin.name}
            </h4>
            <p
              style={{
                border: '1px solid blue',
                borderRadius: '5px',
                padding: '18px',
                fontSize: '17px',
                color: '#333333',
              }}
            >
              {coin.name} is a global, public decentralized blockchain designed
              to run peer-to-peer smart contracts and decentralized
              applications.
            </p>
          </div>
        </div>
        <div className="supply-info">
          <h2>Supply information</h2>
          <p style={{ color: '#666666', width: '75%', margin: '18px auto' }}>
            View the total and circulating supply of {coin.name}, including
            details on how the supplies are calculated.
          </p>
          <div style={{ backgroundColor: '#f1f6ff', padding: '12px 6px' }}>
            <p
              style={{
                display: 'flex',
                alignItems: 'center',
                color: 'green',
                justifyContent: 'center',
                padding: '12px 0',
              }}
            >
              <CheckCircleOutlineIcon />
              Verified supplies
            </p>
            <p
              style={{
                borderBottom: '1px solid #ccc',
                margin: '12px 4px',
                display: 'flex',
                justifyContent: 'space-between',
                padding: '12px 0',
              }}
            >
              Updated 2 minutes ago
            </p>
            <p
              style={{
                borderBottom: '1px solid #ccc',
                margin: '12px 4px',
                display: 'flex',
                justifyContent: 'space-between',
                padding: '12px 0',
              }}
            >
              Total supply
              <span style={{ fontWeight: 'bold' }}>
                ${parseFloat(coin['24hVolume']).toLocaleString('en-US')}
              </span>
            </p>
            <p
              style={{
                borderBottom: '1px solid #ccc',
                margin: '12px 4px',
                display: 'flex',
                justifyContent: 'space-between',
                padding: '12px 0',
              }}
            >
              Max supply
              <span style={{ fontWeight: 'bold' }}>
                ${parseFloat(coin.marketCap).toLocaleString('en-US')}
              </span>
            </p>
          </div>

          <div className="links">
            <h4 style={{ marginTop: '60px', marginLeft: '10px' }}>Links</h4>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                borderBottom: '2px solid lightblue',
                padding: '12px 6px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <LinkIcon />
                <p>website</p>
              </div>
              <a
                style={{ display: 'flex', alignItems: 'center' }}
                href={`https://${coin.name}.org`}
              >
                {coin.name}.org
              </a>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                borderBottom: '2px solid lightblue',
                padding: '12px 6px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <CurrencyBitcoinIcon />
                <p>bitcointalk</p>
              </div>
              <a
                style={{ display: 'flex', alignItems: 'center' }}
                href={`https://bitcointalk.org`}
              >
                bitcointalk.org
              </a>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                borderBottom: '2px solid lightblue',
                padding: '12px 6px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <FacebookIcon />
                <p>facebook</p>
              </div>
              <a
                style={{ display: 'flex', alignItems: 'center' }}
                href={`https://facebook.com`}
              >
                facebook
              </a>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                borderBottom: '2px solid lightblue',
                padding: '12px 6px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <GitHubIcon />
                <p>github</p>
              </div>
              <a
                style={{ display: 'flex', alignItems: 'center' }}
                href={`https://github.com/${coin.name}`}
              >
                {coin.name}
              </a>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                borderBottom: '2px solid lightblue',
                padding: '12px 6px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <RedditIcon />
                <p>reddit</p>
              </div>
              <a
                style={{ display: 'flex', alignItems: 'center' }}
                href={`https://reddit.com/${coin.name}`}
              >
                r/{coin.name}
              </a>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                borderBottom: '2px solid lightblue',
                padding: '12px 6px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <YouTubeIcon />
                <p>youtube</p>
              </div>
              <a
                style={{ display: 'flex', alignItems: 'center' }}
                href={`https://youtube.com/${coin.name}`}
              >
                {coin.name}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCoin;
