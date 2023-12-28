import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Sidebar.css';
import IoniconsComponent from './IoniconsComponent';
import { Link } from 'react-router-dom'; // Import Link

const Sidebar = () => {
  return (
    <div className="sidebar">
        <img src="/20126b38115863.57566eb03b5e1.png" alt="Logo" className="logo" />    
        <Link to="/" style={{ textDecoration: 'none' }}>
            <h3>Home</h3>
        </Link>
        <Calendar />
    </div>
  );
};

export default Sidebar;
