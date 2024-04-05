import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MainContent.css';

const MainContent = () => {
    const [location, setLocation] = useState('');
    const navigate = useNavigate();
    const [searchResults, setSearchResults] = useState([]);
    const handleSearch = async () => {
        try {
            const response = await fetch(`https://mensaappbackend-3966d77b3b8a.herokuapp.com/specific?name=${encodeURIComponent(location)}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Data from backend:', data);
                setSearchResults(data);

                // Navigate to the search result page only if there are results
                if (data.length > 0) {
                    navigate('/SearchResult', { state: { backendData: data } });
                }
            } else {
                console.error('Error searching for locations:', response.statusText);
            }
        } catch (error) {
            console.error('Error searching for locations:', error.message);
        }
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