// MainContent.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MainContent.css';

const MainContent = () => {
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    // Perform the location search logic here
    console.log('Searching for:', location);

    // You can replace the console.log with the actual logic for location search

    // Navigate to the search result page
    navigate('/SearchResult');
  };

  return (
    <div className="container">
      <img
        src="/chicken-tikka-masala.JPG"
        alt="Logo"
        className="Photoo"
      />
      <input
        type="text"
        id="locationSearch"
        placeholder="Search for locations"
        className="search-box"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
      />

      <div className="image-container">
        <div className="image-with-text">
          <img src="/35942a8a6bb75dc1842582deb7168bf8-orange-location-marker-infographic.png" alt="Image 2" className="small-image" />
          <p className="image-text">Tell us who you are</p>
        </div>
        <div className="image-with-text">
          <img src="/calendar_14122.png" alt="Image 1" className="small-image" />
          <p className="image-text">Pick up your date</p>
        </div>
        <div className="image-with-text">
          <img src="/search-icon-md.png" alt="Image 3" className="small-image" />
          <p className="image-text">Enjoy your Meal!</p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
