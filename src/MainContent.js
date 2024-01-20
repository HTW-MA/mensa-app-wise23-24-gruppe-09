// MainContent.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MainContent.css';
const MainContent = () => {
    const [location, setLocation] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        // Perform the location search logic here
        console.log('Searching for:', location);

        // You can replace the console.log with the actual logic for location search

        // Navigate to the search result page
        navigate('/SearchResult');
    };

    return (
        <div className="container">
            <img
                src="./1556_p1020274.4d76dca59dab546c6a676bf1cadc2a5e.jpg"
                alt="Search"
                className="search-image"
            />
            <input
                type="text"
                id="locationSearch"
                placeholder="Search for locations"
                className="search-box"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        handleSearch();
                    }
                }}
            />


        </div>
    );
};

export default MainContent;
