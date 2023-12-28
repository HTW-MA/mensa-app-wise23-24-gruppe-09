import React from 'react';
import './FoodMenu.css';
import { useDarkMode } from './DarkModeContext'; 

const FoodMenu = ({ onAddToCheckout }) => {
  const { darkMode } = useDarkMode();
  const menuItems = [
    {
      id: 1,
      name: 'Deluxe Burger',
      price: 12.99,
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr...',
      image: '/classic-burger,id=ba2c5be1,b=lecker,w=1200,rm=sk.jpeg',
    },
    {
      id: 2,
      name: 'Burger',
      price: 12.00,
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr...',
      image: '/burgercampNachos_07__FillWzExNzAsNTgzXQ.jpg',
    },
    {
      id: 3,
      name: 'Sushi',
      price: 10.00,
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr...',
      image: '/6ad5fabf-a3b4-4dea-b8f2-cfb907080b7c-barramundi.jpg',
    },
    {
      id: 4,
      name: 'Chicken Tikka Masala',
      price: 5.99,
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr...',
      image: '/chicken-tikka-masala.jpg',
    },
    // Add more menu items here...
  ];
  const menuClassName = darkMode ? 'food-menu dark-mode' : 'food-menu';

  return (
    <div className={menuClassName}>
      {menuItems.map((item) => (
      <div key={item.id} className="menu-item">
          <div className="menu-item-text">
            <h2>{item.name} - ${item.price.toFixed(2)}</h2>
            <p>{item.description}</p>
          </div>
          <img src={item.image} alt={item.name} className="menu-item-image" />
          <button 
  className="add-to-checkout-btn" 
  onClick={(e) => {
    e.stopPropagation(); // Prevents event bubbling
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
