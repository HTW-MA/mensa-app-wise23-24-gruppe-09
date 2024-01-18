import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import MainContent from './MainContent';
import SearchResult from './SearchResult';
import TopNav from './TopNav';
import Sidebar from './Sidebar';
import StarDetails from './StarDetails';
import Checkout from './Checkout';
import ImageBanner from './ImageBanner';
import { DarkModeProvider, useDarkMode } from './DarkModeContext';
import FilterComponent from './FilterComponent'; // Import FilterComponent here

import './App.css';

function App() {
    const { darkMode } = useDarkMode();
    const [filteredStars, setFilteredStars] = useState([]);

    // Handle fetching data based on the search term
    const handleSearch = searchTerm => {
        // Replace the test data with an actual API call
        fetch(`http://localhost:3001/?name=${searchTerm}`)
            .then(response => response.json())
            .then(data => setFilteredStars(data))
            .catch(error => console.error('Error fetching data:', error));
    };

    return (
        <DarkModeProvider>
            <Router>
                <div className={`app-container ${darkMode ? 'dark-mode' : ''}`}>
                    <TopNav />
                    <Routes>
                        <Route
                            path="/"
                            element={<MainContent onSearch={handleSearch} />}
                        />
                        <Route path="/SearchResult" element={<SearchResult stars={filteredStars} />} />
                        <Route path="/details/:title" element={<StarDetails />} />
                    </Routes>
                </div>
            </Router>
        </DarkModeProvider>
    );
}

function AppContainer() {
  const { darkMode } = useDarkMode();

  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : ''}`}>
      <TopNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/SearchResult" element={<SearchResultPage />} />
        <Route path="/details/:title" element={<StarDetailsPage />} />
      </Routes>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <Header />
      <MainContent />
    </>
  );
}

function SearchResultPage() {
  return (
    <>
      <Sidebar />
      <SearchResult />
    </>
  );
}

function StarDetailsPage() {
  return (
    <>
      <StarDetails />
      <Checkout />
    </>
  );
}

export default App;
