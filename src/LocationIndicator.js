import React from 'react';
import './LocationIndicator.css'; // Ensure this is the correct path to your CSS file

const LocationIndicator = ({ location }) => {
  return (
    <div className="location-indicator">
      <span>Location we are in: {location}</span>
    </div>
  );
};

export default LocationIndicator;
