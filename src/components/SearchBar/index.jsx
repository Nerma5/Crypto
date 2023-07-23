import React from 'react';
import './index.scss';
import { Search } from '@mui/icons-material';

const SearchBar = ({ searchQuery, onChange }) => {
  return (
    <div className="input-field">
      <div className="search-icon">
        <Search />
      </div>
      <input
        key="search-bar"
        value={searchQuery}
        placeholder="Search cryptos"
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
