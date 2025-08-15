import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/MovieDetails.css';

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=f874b676`);
        const data = await response.json();
        
        if (data.Response === 'True') {
          setMovie(data);
        } else {
          setError(data.Error || 'Movie not found');
        }
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setError('Failed to fetch movie details');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchMovieDetails();
    }
  }, [id]);

  const handleBack = () => {
    navigate('/');
  };

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Loading movie details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p className="error-message">{error}</p>
        <button onClick={handleBack} className="back-button">
          Back to Search
        </button>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="error-container">
        <p className="error-message">Movie not found</p>
        <button onClick={handleBack} className="back-button">
          Back to Search
        </button>
      </div>
    );
  }

  return (
    <div className="movie-details">
      <div className="container">
        <button onClick={handleBack} className="back-button">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Search
        </button>
        
        <div className="movie-content">
          <div className="movie-poster-large">
            {movie.Poster !== 'N/A' ? (
              <img src={movie.Poster} alt={movie.Title} />
            ) : (
              <div className="no-poster-large">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z" fill="currentColor"/>
                  <path d="M14.14 11.86L11 15L9.5 13.5L6.5 16.5H17.5L14.14 11.86Z" fill="currentColor"/>
                </svg>
                <span>No Image Available</span>
              </div>
            )}
          </div>
          
          <div className="movie-info-detailed">
            <h1 className="movie-title-large">{movie.Title}</h1>
            
            <div className="movie-meta">
              <span className="movie-year">{movie.Year}</span>
              <span className="movie-runtime">{movie.Runtime}</span>
              <span className="movie-rating">{movie.imdbRating}/10</span>
            </div>
            
            <div className="movie-genre">
              <span>{movie.Genre}</span>
            </div>
            
            <div className="movie-director">
              <strong>Director:</strong> {movie.Director}
            </div>
            
            <div className="movie-actors">
              <strong>Cast:</strong> {movie.Actors}
            </div>
            
            <div className="movie-plot">
              <strong>Plot:</strong>
              <p>{movie.Plot}</p>
            </div>
            
            <div className="movie-awards">
              {movie.Awards !== 'N/A' && (
                <div>
                  <strong>Awards:</strong>
                  <p>{movie.Awards}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
