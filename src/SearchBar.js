import React, { useState } from 'react';
import './SearchBar.css'; // Assuming you have a separate CSS file for styling

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    if (onSearch) {
      onSearch(value); // Call the passed-in search function with the current value
    }
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search..."
        className="search-bar"
      />
    </div>
  );
};

export default SearchBar;
