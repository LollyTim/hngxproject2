import React, { useState, useEffect } from 'react';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const apiKey = '31b06d9bb7348b7ea498207c43d808f8';
    const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
  
        const movieList = data.results.slice(0, 10);
        setMovies(movieList);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching movie data:', error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className='my-10 mx-auto w-[90%]'>
      <div className='flex justify-between items-center py-8'>
      <h1 className='font-bold text-black text-2xl' >Featured Movies</h1>
      <a className='text-red-600 font-semibold' href="#home">See more &gt;</a>
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between items-center gap-8'>
          {movies.map((movie) => (
            <div className=" flex flex-col gap-5" key={movie.id} data-testid="movie-card">
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
      )}
    </div>
  );
}

export default Movies;

