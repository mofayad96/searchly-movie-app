import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';
import '../styles/Home.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const searchMovies = async () => {
    if (!searchTerm.trim()) {
      setMovies([]);
      setError('');
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      const response = await fetch(`https://www.omdbapi.com/?s=${encodeURIComponent(searchTerm)}&apikey=f874b676`);
      const data = await response.json();
      
      if (data.Response === 'True') {
        setMovies(data.Search);
      } else {
        setMovies([]);
        setError(data.Error || 'No movies found');
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
      setMovies([]);
      setError('Failed to fetch movies. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    setError('');
  };

  const handleSearch = () => {
    searchMovies();
  };

  return (
    <div className="home">
      <div className="container">
        <h1 className="title">Searchly</h1>
        <p className="subtitle">
          Discover your next favorite movie with Searchly's powerful search engine. 
          Search by title, actor, or genre and explore thousands of films from around the world.
        </p>
        
        <div className="search-section">
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
            onSearch={handleSearch}
          />
        </div>

        <div className="results-section">
          <MovieList
            movies={movies}
            loading={loading}
            error={error}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
