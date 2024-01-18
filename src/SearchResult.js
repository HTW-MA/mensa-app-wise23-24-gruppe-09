// Import necessary dependencies
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import TopNav from './TopNav';
import SearchBar from './SearchBar';
import StarGrid from './StarGrid';
import LocationIndicator from './LocationIndicator';
import FilterComponent from './FilterComponent';
import './SearchResult.css';

const SearchResult = ({ stars }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredStars, setFilteredStars] = useState(stars); // Initialize with the prop value
  const [location, setLocation] = useState('Berlin');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    // Replace the test data with an actual API call
    if (searchTerm) {
      fetch(`http://localhost:3001/?name=${searchTerm}`)
          .then(response => response.json())
          .then(data => {
            setFilteredStars(data);
            console.log('Filtered Stars:', data); // Log the data
          })
          .catch(error => console.error('Error fetching data:', error));
    } else {
      // If searchTerm is empty, reset filteredStars to the original prop value (stars)
      setFilteredStars(stars);
    }
  }, [searchTerm, stars]);

  console.log('Filtered Stars:', filteredStars); // Log statement here
  const handleSearch = term => {
    setSearchTerm(term);
  };

  const handleFilterChange = filterValue => {
    setFilter(filterValue);
  };

  return (
      <div className="search-result-page">
        <Sidebar />
        <div className="content-container">
          <SearchBar onSearch={handleSearch} />
          <LocationIndicator location={location} />
          <FilterComponent onFilterChange={handleFilterChange} />

          {/* Display results in a text field */}
          <textarea
              className="result-text-field"
              value={JSON.stringify(filteredStars, null, 2)}
              readOnly
          />
        </div>
      </div>
  );
};

export default SearchResult;
