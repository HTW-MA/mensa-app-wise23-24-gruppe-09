// StarDetails.js
import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Checkout from './Checkout';
import FoodMenu from './FoodMenu';
import ImageBanner from './ImageBanner';
import FancyButtons from './FancyButtons';
import StarGrid from './StarGrid'; // Import StarGrid

const StarDetails = () => {
    const { title } = useParams();
    const location = useLocation();
    console.log('Location in StarDetails:', location);
    console.log('Location state in StarDetails:', location.state);
    const imageUrl = new URLSearchParams(window.location.search).get('imageUrl');
    const canteenId = new URLSearchParams(window.location.search).get('canteenId');
    console.log('CanteenId in StarDetails:', canteenId);
    const [checkoutItems, setCheckoutItems] = useState([]);

    const handleAddToCheckout = (item) => {
        console.log('Adding item to checkout in StarDetails:', item);
        setCheckoutItems([...checkoutItems, item]);
    };

    return (
        <div className="star-details">
            <ImageBanner
                imageUrl={imageUrl || '/default-placeholder-image.jpg'}
                altText={`Image for ${title}`}
            />
            <FancyButtons />
            <FoodMenu onAddToCheckout={handleAddToCheckout} canteenId={canteenId} />
            <Checkout items={checkoutItems} />
        </div>
    );
};

export default StarDetails;
