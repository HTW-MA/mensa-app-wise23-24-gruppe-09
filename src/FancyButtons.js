// FancyButtons.js
import React from 'react';
import './FancyButtons.css'; // Make sure to create this CSS file

const FancyButtons = () => {
  return (
    <div className="fancy-buttons-container">
      <button className="fancy-button red">Popular</button>
      <button className="fancy-button green">Veggie</button>
      <button className="fancy-button blue">Deserts</button>
      <button className="fancy-button blue">Drinks</button>

    </div>
  );
};

export default FancyButtons;
