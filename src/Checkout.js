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
      <h1>Basket</h1>

      {/* Container for the checkout items */}
      <div className="checkout-items-container">
        {/* Maps over the items and displays each one, if any */}
        {safeItems.length > 0 ? (
          safeItems.map((item, index) => (
            <div key={index} className="checkout-item">
              {/* Item name and price */}
              <span>{item.name}</span>
              <span>${item.price.toFixed(2)}</span>
            </div>
          ))
        ) : (
          // Message displayed if no items are in the basket
          <div className="empty-basket-message">
            <p>Your basket is empty</p>
          </div>
        )}
      </div>

      {/* Checkout button */}
      <button className="checkout-button">Checkout</button>
    </div>
  );
};

export default Checkout;
