import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/MovieCard.css';

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleClick = () => {
    navigate(`/movie/${movie.imdbID}`);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  return (
    <div className="movie-card glass" onClick={handleClick}>
      <div className="movie-poster">
        {movie.Poster !== 'N/A' && !imageError ? (
          <img 
            src={movie.Poster} 
            alt={movie.Title}
            onLoad={handleImageLoad}
            onError={handleImageError}
            className={imageLoaded ? 'loaded' : ''}
          />
        ) : (
          <div className="no-poster">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z" fill="currentColor"/>
              <path d="M14.14 11.86L11 15L9.5 13.5L6.5 16.5H17.5L14.14 11.86Z" fill="currentColor"/>
            </svg>
            <span>No Image</span>
          </div>
        )}
        <div className="movie-overlay">
          <div className="movie-type-badge">
            {movie.Type}
          </div>
          <div className="view-details">
            <span>View Details</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
      
      <div className="movie-info">
        <h3 className="movie-title">{movie.Title}</h3>
        <div className="movie-meta">
          <span className="movie-year">{movie.Year}</span>
          <span className="movie-type">{movie.Type}</span>
        </div>
        <div className="movie-rating">
          <div className="rating-stars">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
              </svg>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
