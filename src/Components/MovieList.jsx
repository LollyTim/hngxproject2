import React from 'react';

function MovieList({ searchResults }) {
  return (
    <div>
      <h1>Search Results</h1>
      <div>
        {searchResults.map((movie) => (
          <div key={movie.id} data-testid="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
              alt={movie.title}
              data-testid="movie-poster"
            />
            <h2 data-testid="movie-title">{movie.title}</h2>
            <p data-testid="movie-release-date">{movie.release_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
