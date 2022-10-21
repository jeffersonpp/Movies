
import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieTable from './MovieTable';


describe('Check if MovieTable component displays content', () => {
  const mockMovies = [
    {
      id: 1,
      title: 'First Test',
      poster_path: 'no_image.jpg',
      release_date: '2022-20-10',
      overview: 'One movie to test display',
      vote_average: 7,
      vote_count: 1412      
    },
    {
      id: 2,
      title: 'Second Test',
      poster_path: 'no_image.jpg',
      release_date: '2022-20-10',
      overview: 'Second one',
      vote_average: 3,
      vote_count: 4141      
    }
  ];

  test('Show List of Videos', () => {
    render(<MovieTable movies={mockMovies} lists={
      {
        'favorites': [],
        'watch_later': [],
        'setFavorites': () =>{},
        'setWatchLater': () =>{},
        'saveList': () =>{}
      }
    }/>);
   
    const container = screen.getByTestId('container');
    
    expect(container).toBeInTheDocument();
    // Two movies
    expect(container.childNodes.length).toBe(2);
  });
  
})
