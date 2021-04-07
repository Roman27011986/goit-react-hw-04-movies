import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const apiKey = '0900e674aa431a5cac8b8b166be20d60';

export const getTrendsMovies = async () => {
  const trendMovies = await axios.get(
    `trending/all/day?api_key=${apiKey}&page=1`,
  );
  return trendMovies;
};

export const getMovieDitails = async movieId => {
  const movieDitails = await axios.get(`movie/${movieId}?api_key=${apiKey}`);

  return movieDitails;
};

export const getMoviesByName = async query => {
  const moviesName = await axios.get(
    `/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`,
  );

  return moviesName;
};

export const getReviewsToMovie = async movieId => {
  const reviews = await axios.get(`movie/${movieId}/reviews?api_key=${apiKey}`);
  return reviews.data;
};

export const getCast = async movieId => {
  const reviews = await axios.get(`movie/${movieId}/credits?api_key=${apiKey}`);

  return reviews;
};
