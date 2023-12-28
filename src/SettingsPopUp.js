// SettingsPopUp.js
import React, { useState } from 'react';
import Switch from 'react-switch';
import './SettingsPopUp.css'; // Import the CSS file

const SettingsPopUp = () => {
  const [theme, setTheme] = useState('light'); // 'light' or 'dark'
  const [language, setLanguage] = useState('english'); // 'english' or 'german'

  const handleThemeChange = (checked) => {
    setTheme(checked ? 'dark' : 'light');
  };

  const handleLanguageChange = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'english' ? 'german' : 'english'));
  };

  return (
    <div className="settings-popup">
      <h3>Settings</h3>
      <div className="setting-item">
        <span>Theme:</span>
        <Switch
          onChange={handleThemeChange}
          checked={theme === 'dark'}
          onColor="#282c35" // Dark color
          offColor="#dddddd" // Light color
        />
      </div>
      <div className="setting-item">
        <span>Language:</span>
        <button onClick={handleLanguageChange}>{language === 'english' ? 'German' : 'English'}</button>
      </div>
    </div>
  );
};

export default SettingsPopUp;
