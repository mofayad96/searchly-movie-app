import React from 'react';
import MovieCard from './MovieCard';
import '../styles/MovieList.css';

const MovieList = ({ movies, loading, error }) => {
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner">
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
        </div>
        <p className="loading-text">Searching for movies...</p>
        <div className="loading-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container glass">
        <div className="error-icon">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="currentColor"/>
          </svg>
        </div>
        <h3 className="error-title">Oops! Something went wrong</h3>
        <p className="error-message">{error}</p>
        <button className="error-retry" onClick={() => window.location.reload()}>
          Try Again
        </button>
      </div>
    );
  }

  if (!movies || movies.length === 0) {
    return (
      <div className="no-results-container glass">
        <div className="no-results-icon">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14Z" fill="currentColor"/>
          </svg>
        </div>
        <h3 className="no-results-title">No movies found</h3>
        <p className="no-results-message">Try searching for something else or check your spelling!</p>
        <div className="no-results-suggestions">
          <span>Popular searches:</span>
          <div className="suggestion-tags">
            <span>Avengers</span>
            <span>Batman</span>
            <span>Star Wars</span>
            <span>Harry Potter</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="movies-container">
      <div className="results-header">
        <h2 className="results-title">Found {movies.length} results</h2>
        <div className="results-filter">
          <span>Sort by:</span>
          <select className="filter-select">
            <option value="relevance">Relevance</option>
            <option value="year">Year</option>
            <option value="title">Title</option>
            <option value="type">Type</option>
          </select>
        </div>
      </div>
      
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
