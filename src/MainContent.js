import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './MainContent.css';
import SearchResult from './SearchResult';

const MainContent = () => {
    const [location, setLocation] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        console.log('Search results from MainContent:', searchResults);
        // Navigate to the search result page only if there are results
        console.log('Search results updated:', searchResults);
        if (searchResults.length > 0) {
            const firstName = searchResults[0].name;
            console.log('Name der Mensa:', firstName);
            navigate('/SearchResult');
        }
        console.log('Component in MainContent.js mounted or updated');
    }, [searchResults]);

    const handleSearch = async () => {
        try {
            const response = await fetch(`http://localhost:3001/specific?name=${encodeURIComponent(location)}`, {
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
                    navigate('/SearchResult');
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

            {/* Render SearchResult only if there are search results */}
            {searchResults.length > 0 && <SearchResult searchResults={searchResults} />}
        </div>
    );
};

export default MainContent;