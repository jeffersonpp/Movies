import http from "./http-common.js";

const key = process.env.REACT_APP_API_KEY;

// const searchMovie = (param) => {
//     return http.get(`/search/movie?api_key=${key}&query=${param}`);
// };

const getPopular = () => {
    return http.get(`/movie/popular?api_key=${key}`);
};

const getTopRated = () => {
    return http.get(`/movie/top_rated?api_key=${key}`);
};

const getMovie = (movie_id) => {    
    return http.get(`/movie/${movie_id}?api_key=${key}`);
};

const MovieService = {
//   searchMovie,
  getPopular,
  getTopRated,
  getMovie
};

export default MovieService;