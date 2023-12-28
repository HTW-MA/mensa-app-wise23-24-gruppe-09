// SortDropdown.js
import React from 'react';

const SortDropdown = ({ onSortChange }) => {
  return (
    <select onChange={(e) => onSortChange(e.target.value)}>
      <option value="price">Sort by price</option>
      {/* Add more sorting options here */}
    </select>
  );
};

export default SortDropdown;
