import React from 'react';
import { useDarkMode } from './DarkModeContext';
import './Checkout.css';

const Checkout = ({ items }) => {
    // Logs the items passed to the component for debugging.
    console.log('Items in checkout:', items);

    // Accesses the dark mode state from the context.
    const { darkMode } = useDarkMode();

    // Ensures that items is always an array to prevent errors.
    const safeItems = items || [];

    // The main component rendering.
    return (
        <div className={`checkout ${darkMode ? 'dark-mode' : ''}`}>
            {/* Header for the checkout */}

            {/* Container for the checkout items */}
            <div className="checkout-items-container">
                {/* Maps over the items and displays each one, if any */}
                {safeItems.length > 0 ? (
                    safeItems.map((item, index) => {
                        // Log the mealName for each item
                        console.log('Meal Name:', item.mealName);
                        console.log('Price:', item.prices[0].price);
                        return (
                            <div key={index} className="checkout-item">
                                {/* Item name and price */}
                                <p className="item-name">{item.mealName}</p>
                                <p className="item-price">${item.prices[0].price.toFixed(2)}</p>
                            </div>
                        );
                    })
                ) : (
                    // Message displayed if no items are in the basket
                    <div className="picsss">
                        <p>Basket</p>
                        <div className="image-with-text">
                            <p className="item-name">burger</p>
                            <img src="/classic-burger,id=ba2c5be1,b=lecker,w=1200,rm=sk.jpeg" alt="No items in basket"/>
                            <p className="item-price">5.00$</p>
                        </div>
                        <div className="image-with-text">
                            <p className="item-name">burger</p>
                            <img src="/classic-burger,id=ba2c5be1,b=lecker,w=1200,rm=sk.jpeg" alt="No items in basket"/>
                            <p className="item-price">5.00$</p>
                        </div>
                    </div>
                )}
            </div>

            {/* Checkout button */}
            <p className='paratotal'> total = 10$ </p>
        </div>
    );
};

export default Checkout;
