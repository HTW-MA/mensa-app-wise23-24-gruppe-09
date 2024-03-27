import React, { useState, useEffect } from 'react';
import './FoodMenu.css';
import { useDarkMode } from './DarkModeContext';

const FoodMenu = ({ onAddToCheckout, canteenId }) => {
  const { darkMode } = useDarkMode();
  const [menuItems, setMenuItems] = useState([]);
  console.log('MensaID in FoodMenu:', canteenId);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await fetch(`https://localhost:3001/specific-menue-info?canteenId=${canteenId}`);
        const specificMenuInfo = await response.json();

        const currentDate = new Date().toISOString().split('T')[0];
        const filteredMenuItems = specificMenuInfo.filter(item => item.date >= currentDate);

        setMenuItems(filteredMenuItems);
        console.log('Alle Menues:',filteredMenuItems);
      } catch (error) {
        console.error('Error fetching menu data:', error);
      }
    };

    if (canteenId) {
      fetchMenuData();
    }
  }, [canteenId]);

  const menuClassName = darkMode ? 'food-menu dark-mode' : 'food-menu';
  return (
      <div className={menuClassName}>
        {menuItems.map((item) => (
            <div key={item.id} className="menu-item">
              <div className="menu-item-text">
                <h2>{item.mealName} - {item.prices && item.prices[0] ? `$${item.prices[0].price.toFixed(2)}` : 'Price not available'}</h2>
                <p>{item.description}</p>
              </div>
              <img src={item.image} alt={item.mealName} className="menu-item-image" />
              <button
                  className="add-to-checkout-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log('Adding to checkout:', item);
                    onAddToCheckout(item);
                  }}
              >
                +
              </button>
            </div>
        ))}
      </div>
  );
};

export default FoodMenu;
