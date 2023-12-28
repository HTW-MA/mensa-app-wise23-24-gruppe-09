// MensaCard.js
import React from 'react';

const MensaCard = ({ details }) => {
  return (
    <div className="mensa-card">
      <img src={details.photo} alt={details.name} />
      <h3>{details.name}</h3>
      <p>{details.contact}</p>
      <p>{details.email}</p>
      <p>Min. {details.minPrice}</p>
    </div>
  );
};

export default MensaCard;
