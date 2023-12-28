import React from 'react';
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
  return (
    <DarkModeProvider>
      <Router>
        <AppContainer />
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
