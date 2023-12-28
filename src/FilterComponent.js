import React from 'react';
import './FilterComponent.css'; // Adjust the path as per your file structure

const FilterComponent = ({ onFilterChange }) => {
    return (
      <div className="filter-component">
        <div className="select-style">
          <select onChange={e => onFilterChange(e.target.value)} className="filter-select">
            <option value="all">All Prices</option>
            <option value="low">Below $5</option>
            <option value="medium">$5 - $10</option>
            <option value="high">Above $10</option>
          </select>
        </div>
      </div>
    );
  };

export default FilterComponent;

