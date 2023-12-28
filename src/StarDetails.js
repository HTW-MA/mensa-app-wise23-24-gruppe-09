// StarDetails.js
import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Checkout from './Checkout';
import FoodMenu from './FoodMenu';
import ImageBanner from './ImageBanner';
import FancyButtons from './FancyButtons';


const StarDetails = () => {
  const { title } = useParams();
  const location = useLocation();
  const imageUrl = location.state?.imageUrl; // Access imageUrl from state

  const [checkoutItems, setCheckoutItems] = useState([]);

  const handleAddToCheckout = (item) => {
    setCheckoutItems([...checkoutItems, item]);
  };

  return (
    <div className="star-details">
      <ImageBanner 
        imageUrl={imageUrl || '/default-placeholder-image.jpg'} // Fallback to a default image
        altText={`Image for ${title}`} 
      />
      <FancyButtons /> {/* Add the FancyButtons component */}
      <FoodMenu onAddToCheckout={handleAddToCheckout} />
      <Checkout items={checkoutItems} />
    </div>
  );
};

export default StarDetails;
