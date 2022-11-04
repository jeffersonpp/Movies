import { waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {searchMovie, popularMovies, getTopRated } from './actions/movies.js';

describe('Test the API integration', () =>{
  test('Check Search', async() => {

    // A Weird movie name to search
     waitFor(async () => {
      const movie = await searchMovie('XXXXXXX');
      expect(movie[0].title).toBe("A tarot card reading as a starting point. A disruptive relationship as a point. Translation of the cards' symbols to a joint. Of the domestic exploration for finding my voice.");
    });
  });

  test('Check PopularMovies', async() => {

    // 20 items per page
     waitFor(async () => {
      const movie = await popularMovies();
      expect(movie.length).toBe(20);
    });
  });

  test('Check Top Rated', async() => {

    // 20 items per page
     waitFor(async () => {
      const movie = await getTopRated();
      expect(movie.length).toBe(20);
    });
  });

});