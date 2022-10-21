import MovieService from "../MovieService";


export const searchMovie = (query) => {
  return new Promise( async (resolve, reject) => {
    try {
      const movies = await MovieService.searchMovie(query);

      resolve(movies.data);
    } catch (err) {
      reject(err);
    }
  });
}

export const popularMovies = () => {
  return new Promise( async (resolve, reject) => {
    try {
      const movies = await MovieService.getPopular();
      resolve(movies.data);
    } catch (err) {
      reject(err);
    }
  });
}

export const getTopRated = () => {
  return new Promise( async (resolve, reject) => {
    try {
      const movies = await MovieService.getTopRated();
      resolve(movies.data);
    } catch (err) {
      reject(err);
    }
  });
}

export const getMovie = (movie_id) => {
  return new Promise( async (resolve, reject) => {
    try {
      const movies = await MovieService.getMovie(movie_id);

      resolve(movies.data);
    } catch (err) {
      reject(err);
    }
  });
}