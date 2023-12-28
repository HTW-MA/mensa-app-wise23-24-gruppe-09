import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import IoniconsComponent from './IoniconsComponent';
import Switch from 'react-switch';
import { useDarkMode } from './DarkModeContext';
import './TopNav.css';

const TopNav = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const location = useLocation();
  const showBackButton = location.pathname !== '/'; // Check if not on the home page

  const iconStyle = {
    marginLeft: '10px',
    fontSize: '24px',
    cursor: 'pointer',
    color: darkMode ? '#FFFFFF' : '#FF5C00',
  };

  const [showSettings, setShowSettings] = useState(false);
  const [language, setLanguage] = useState('English');

  const toggleSettings = () => {
    setShowSettings(prev => !prev);
  };

  const handleLanguageChange = () => {
    setLanguage(prevLanguage => (prevLanguage === 'English' ? 'German' : 'English'));
  };

  return (
    <nav className={`top-nav ${darkMode ? 'dark-mode' : ''}`}>
      {showBackButton && (
        <button className="back-button" onClick={() => window.history.back()}>Back</button>
      )}
      <div className="logo-container">
        <Link to="/">
          <img src="/20126b38115863.57566eb03b5e1.png" alt="Logo" className="logo" />
        </Link>
      </div>
      <div className="buttons-container">
        <IoniconsComponent />
        <ion-icon name="settings" size="large" style={iconStyle} onClick={toggleSettings} />
        <ion-icon name="notifications" size="large" style={iconStyle} />
      </div>
      {showSettings && (
        <div className="settings-popup">
          <div className="settings-container">
            <div className="setting-item">
              <label>
                <span className="setting-label">Dark Mode</span>
                <Switch onChange={toggleDarkMode} checked={darkMode} />
              </label>
            </div>
            <div className="setting-item">
              <label>Language</label>
              <button className="language-button" onClick={handleLanguageChange}>
                {language}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default TopNav;
