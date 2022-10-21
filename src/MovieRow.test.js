
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MovieRow from './MovieRow';
import '@testing-library/jest-dom/extend-expect';


describe('Check if MovieRow component displays content', () => {
  let mockFavorites = [];
  let mockWatchLater= [];
  const mockSetFavorites = (list) => {
    mockFavorites = list;
  }
  const mockSetWatchLater = (list) => {
    mockWatchLater = list;
  }

  test('Show List of Videos', () => {
    render(<MovieRow 
              key = {"table_1"}
              id = {1}
              title = {"First Test"}
              image = {"no_image.png"}
              year = {"2022"}
              overview = {"One movie to test display"}
              vote_average = {7}
              vote_count = {1412}
              lists = {
                {
                  'favorites': mockFavorites,
                  'watch_later': mockWatchLater,
                  'setFavorites': mockSetFavorites,
                  'setWatchLater': mockSetWatchLater,
                  'saveList': () =>{}
                }
              }
        />);

    const movie_row = screen.getByTestId('movie_1');
    const button =  screen.getByTestId('collapse_1');
    expect(movie_row).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    // A table and a collapsible poster
    expect(movie_row.childNodes.length).toBe(2);

  });

  test('Add movie to Favorites', () => {
    render(<MovieRow 
            key = {"table_1"}
            id = {1}
            title = {"First Test"}
            image = {"no_image.png"}
            year = {"2022"}
            overview = {"One movie to test display"}
            vote_average = {7}
            vote_count = {1412}
            lists = {
              {
                'favorites': mockFavorites,
                'watch_later': mockWatchLater,
                'setFavorites': mockSetFavorites,
                'setWatchLater': mockSetWatchLater,
                'saveList': () =>{}
              }
            }
        />);
   
    let add_favorite = screen.getByTestId('add_favorite_1');
    expect(add_favorite).toBeInTheDocument();
    expect(mockFavorites.length).toBe(0);
    fireEvent.click(add_favorite);    
    expect(mockFavorites.length).toBe(1);
  });

  test('Remove a movie from Favorites', async () => {
    render(<MovieRow 
            key = {"table_1"}
            id = {1}
            title = {"First Test"}
            image = {"no_image.png"}
            year = {"2022"}
            overview = {"One movie to test display"}
            vote_average = {7}
            vote_count = {1412}
            lists = {
              {
                'favorites': mockFavorites,
                'watch_later': mockWatchLater,
                'setFavorites': mockSetFavorites,
                'setWatchLater': mockSetWatchLater,
                'saveList': () =>{}
              }
            }
          />);

      let remove_favorite = screen.getByTestId('remove_favorite_1');
      expect(remove_favorite).toBeInTheDocument();
      fireEvent.click(remove_favorite);
      expect(mockFavorites.length).toBe(0);
  });
  
  test('Add movie to Watch Later', () => {
    render(<MovieRow 
            key = {"table_1"}
            id = {1}
            title = {"First Test"}
            image = {"no_image.png"}
            year = {"2022"}
            overview = {"One movie to test display"}
            vote_average = {7}
            vote_count = {1412}
            lists = {
              {
                'favorites': mockFavorites,
                'watch_later': mockWatchLater,
                'setFavorites': mockSetFavorites,
                'setWatchLater': mockSetWatchLater,
                'saveList': () =>{}
              }
            }
          />);
   
    let add_watch_later = screen.getByTestId('add_watch_later_1');
    expect(add_watch_later).toBeInTheDocument();
    expect(mockWatchLater.length).toBe(0);
    fireEvent.click(add_watch_later);    
    expect(mockWatchLater.length).toBe(1);
  });

  test('Remove a movie from Watch Later', async () => {
    render(<MovieRow 
            key = {"table_1"}
            id = {1}
            title = {"First Test"}
            image = {"no_image.png"}
            year = {"2022"}
            overview = {"One movie to test display"}
            vote_average = {7}
            vote_count = {1412}
            lists = {
              {
                'favorites': mockFavorites,
                'watch_later': mockWatchLater,
                'setFavorites': mockSetFavorites,
                'setWatchLater': mockSetWatchLater,
                'saveList': () =>{}
              }
            }
          />);
      let remove_watch_later = screen.getByTestId('remove_watch_later_1');
      expect(remove_watch_later).toBeInTheDocument();
      fireEvent.click(remove_watch_later);
      expect(mockWatchLater.length).toBe(0);
  });
});