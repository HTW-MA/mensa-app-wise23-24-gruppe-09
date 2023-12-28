import React, { useState, useEffect } from 'react';
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

  const starsData = [
    { photo: '/03-bild-3.jpg', border: true, title: 'Star Alpha',price:11.00 },
    { photo: '/1560_IMG_3248.4d76dca59dab546c6a676bf1cadc2a5e.jpg', border: true, title: 'Star Beta',price: 4.00 },
    { photo: '/1560_IMG_3248.4d76dca59dab546c6a676bf1cadc2a5e.jpg', border: true, title: 'Star Gamma',price: 5.00 },
    { photo: '/2371_PB130001JUDISCH.4d76dca59dab546c6a676bf1cadc2a5e.jpg', border: true, title: 'Star Delta',price: 1.00 },
    { photo: '/1556_p1020274.4d76dca59dab546c6a676bf1cadc2a5e.jpg', border: true, title: 'Star Epsilon',price: 2.50 },
    { photo: '/2371_PB130001JUDISCH.4d76dca59dab546c6a676bf1cadc2a5e.jpg', border: true, title: 'Star Zeta',price: 3.00 },
    { photo: '/classic-burger,id=ba2c5be1,b=lecker,w=1200,rm=sk.jpeg', border: true, title: 'Star Eta',price:3.50 },
    { photo: '/1556_p1020274.4d76dca59dab546c6a676bf1cadc2a5e.jpg', border: true, title: 'Star Theta',price:7.50 },
    { photo: '/03-bild-3.jpg', border: true, title: 'Star Iota',price:12.00 },
    // Add more stars as needed
  ];
  useEffect(() => {
    let results = starsData.filter(star =>
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

    setFilteredStars(results);
    }, [searchTerm, filter]);

    const handleSearch = term => {
      setSearchTerm(term);
  };
  const handleFilterChange = filterValue => {
    setFilter(filterValue);
};
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