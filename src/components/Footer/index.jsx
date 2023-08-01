import React from 'react';
import './index.scss';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="Footer">
      <div className="links">
        <NavLink to="/">Website</NavLink>
        <NavLink to="/about">Users</NavLink>
        <NavLink to="/coins">Coins</NavLink>
        <NavLink to="/exchanges">Exchanges</NavLink>
      </div>
      <span>
        Crypto app made by: Remzo Gusinac, Umer Sacirovic, Edin Mavric, Nerma
        Hot, Hamza Zukovic, Ensar Vragic;
      </span>
      <span>© 2022 Crypto App</span>
    </div>
  );
};

export default Footer;
