import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

describe('Test the App component', () =>{
  test('Start Displaying Search Bar', () => {
    render(<App />);
    const search_bar = screen.getByTestId('search_bar');
    const watch_later = screen.getByTestId('watch_later');
    const favorites = screen.getByTestId('favorites');

    expect(search_bar).toBeInTheDocument();
    expect(watch_later).toBeInTheDocument();
    expect(favorites).toBeInTheDocument();
  });

  test('Start Displaying Most Popular videos', () => {
    render(<App />);
  
    const title = screen.getByTestId('title');

    expect(title.innerHTML).toBe("Most Popular");
  });
  
  test('Search Bar buttons', () => {
    render(<App />);
    const watch_later = screen.getByTestId('watch_later');
    const title = screen.getByTestId('title');
    const favorites = screen.getByTestId('favorites');

    fireEvent.click(watch_later);
    render(<App />);
    expect(title.innerHTML).toBe("Watch Later");

    fireEvent.click(favorites);
    render(<App />);
    expect(title.innerHTML).toBe("Favorites");
  });
});