import React, { useState } from 'react';
import '../styles/SearchBar.css';

const SearchBar = ({ searchTerm, onSearchChange, onSearch }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch();
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <div className="search-container glass">
      <div className="search-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="Search for movies, TV shows, or actors..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          onKeyPress={handleKeyPress}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`search-input ${isFocused ? 'focused' : ''}`}
        />
        <button type="submit" className="search-button">
          <span>Search</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </form>
      
      <div className="search-suggestions">
        <span>Popular: </span>
        <button onClick={() => onSearchChange('Avengers')}>Avengers</button>
        <button onClick={() => onSearchChange('Batman')}>Batman</button>
        <button onClick={() => onSearchChange('Star Wars')}>Star Wars</button>
        <button onClick={() => onSearchChange('Harry Potter')}>Harry Potter</button>
      </div>
    </div>
  );
};

export default SearchBar;
