import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar'; // Import your Sidebar component
import TopNav from './TopNav'; // Import your TopNav component
import SearchBar from './SearchBar'; // Import your SearchBar component
import StarGrid from './StarGrid'; // Import your StarGrid component
import LocationIndicator from './LocationIndicator';
import FilterComponent from './FilterComponent';
const SearchResult = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredStars, setFilteredStars] = useState([]);
    const [location, setLocation] = useState('Berlin');
    const [filter, setFilter] = useState('all');

    const backendData = useLocation().state?.backendData || [];

    const staticStarsData = [];

    useEffect(() => {
        let dynamicResults = backendData.map(data => {
            const star = {
                photo: '/default-photo.jpg',
                border: true,
                title: data.name,
            };

            // Dynamically map additional properties from backend data
            Object.keys(data).forEach(key => {
                if (key !== 'name') {
                    star[key] = data[key];
                }
            });

            return star;
        });
        console.log('Dynamic Results:', dynamicResults);
        // Combine dynamic results with static data
        const allStarsData = dynamicResults;

        let results = allStarsData.filter(star =>
            star.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (filter !== 'all') {
            results = results.filter(star => {
                switch (filter) {
                    case 'low':
                        return star.price < 5;
                    case 'medium':
                        return star.price >= 5 && star.price <= 10;
                    case 'high':
                        return star.price > 10;
                    default:
                        return true;
                }
            });
        }
        console.log('Results:', results);
        setFilteredStars(results);
    }, [searchTerm, filter, backendData]);

    const handleSearch = term => {
        setSearchTerm(term);
    };
    const handleFilterChange = filterValue => {
        setFilter(filterValue);
    };
    console.log('Static Stars Data:', staticStarsData);
    console.log('Backend Data:', backendData);
    console.log('Filtered Stars in SearchResult.js:', filteredStars);


    return (
        <div className="search-result-page">
            <Sidebar />
            <div className="content-container">
                <SearchBar onSearch={handleSearch} />
                <LocationIndicator location={location} />
                <FilterComponent onFilterChange={handleFilterChange} />
                <StarGrid stars={filteredStars} />
            </div>
        </div>
    );
};

export default SearchResult;