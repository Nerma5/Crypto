import React from 'react';
import './index.scss';
import { NavLink } from 'react-router-dom';
import { Favorite } from '@mui/icons-material';
import { Avatar } from '@mui/material';

const Nav = () => {
  return (
    <div className="Nav">
      <div className="img">
        <img
          width="40"
          src="https://i.postimg.cc/8P0LjnXR/logo-removebg-preview.png"
          alt=""
        />
        CRYPTO-APP
      </div>
      <div className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/coins">Coins</NavLink>
        <NavLink to="/exchanges">Exchanges</NavLink>
        <NavLink to="/about">About us</NavLink>
        <NavLink to="/fav">
          <Favorite />
        </NavLink>
      </div>
      <div className="profile">
        <NavLink to="/profile">
          <Avatar />
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
