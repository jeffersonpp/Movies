import './App.css';
import React, {useEffect, useState} from 'react';
import MovieTable from './MovieTable.js';
import { searchMovie, popularMovies, getTopRated } from "./actions/movies";
import Cookies from 'universal-cookie';

function App() {

  const [movies, setMovies] = useState({});
  const [search, setSearch] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [watch_later, setWatchLater] = useState([]);
  const [title, setTitle] = useState('');
  const cookie = new Cookies();

  const saveList = () => {
    cookie.set('cookieFavorite', JSON.stringify(favorites), { path: '/' });
    cookie.set('cookieWatchLater', JSON.stringify(watch_later), { path: '/' });
  }

  const startSearch = async()=>{
    setTitle('Search: ' + search);
    const data = await searchMovie(search);
    setMovies(data.results)
  }

  const topRated = async()=>{
    setTitle('Top Rated');
    const data = await getTopRated();
    setMovies(data.results);
  }

  const getFavorite = () => {
    setTitle('Favorites');
    setMovies(favorites);
  }

  const watchLater = () => {
    setTitle('Watch Later');
    setMovies(watch_later);
  }

  const getPopular = async () => {
    setTitle('Most Popular');
    const data = await popularMovies();
      setMovies(data.results);
  }

  const onInputChange = e =>{
    setSearch(e.target.value);
  }

  useEffect(()=> {
    const cookieFavorite = cookie.get('cookieFavorite');
    const cookieWatchLater = cookie.get('cookieWatchLater');
    setFavorites(cookieFavorite || []);
    setWatchLater(cookieWatchLater || [])
    getPopular();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

   return(
      <div>
        <div className="search_bar col-md-12" data-testid="search_bar">
            <div onClick={getPopular} data-testid="popular" className="button popular col-md-2">Most Popular</div>
            <div onClick={topRated} data-testid="top_rated" className="button top_rated col-md-2" >Top Rated</div>
            <div onClick={watchLater} data-testid="watch_later" className="button col-md-2" >Watch Later</div>
            <div onClick={getFavorite} data-testid="favorites" className="button col-md-2" >Your Favorites</div>
          <div className='button_search  col-md-3'>
            <input type="text" value={search} onChange={onInputChange} placeholder='Search movies' />
            <button type="submit" onClick={startSearch}>Search</button>
          </div>
        </div>
         <div className="list-title" data-testid="title">{title}</div>
        <MovieTable title={title} movies={movies} lists={{
          'favorites': favorites,
          'watch_later': watch_later,
          'setFavorites': setFavorites,
          'setWatchLater': setWatchLater,
          'setMovies': setMovies,
          'saveList': saveList
          }}/>
      </div>
   );
}

export default App;