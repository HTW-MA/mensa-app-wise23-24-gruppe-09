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
    console.log('Safe Items', safeItems);
    console.log('Safe Items Length:', safeItems.length);
    // The main component rendering.
    return (
        <div className={` Fatima ${darkMode ? 'dark-mode' : ''}`}>
            <div className="Zeina">
                {safeItems.length > 0 ? (
                    safeItems.map((item, index) => {
                        // Log the mealName for each item
                        console.log('Meal Name:', item.mealName);
                        console.log('Price:', item.prices[0].price);
                        console.log('safe items in condition:', safeItems);
                        return (
                            <div key={index} className="checkout-item">
                                <div className="item-name">{item.mealName}</div>
                                <div className="item-price">${item.prices[0].price.toFixed(2)}</div>
                            </div>
                        );
                    })
                ) : null
                    // Message displayed if no items are in the basket
                }
            </div>
            {/* Container for the checkout items */}
        </div>
    );
};

export default Checkout