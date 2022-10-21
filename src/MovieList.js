import React from 'react';
import Poster from './Poster';

function MovieList(props) {

    const showDate = (date) => {
        let base_date = new Date(date);
        return base_date.getFullYear();
    }

    const movieResponse = (list) => {
        if(list.length > 0) {
            return (
                <div className="MoviePool">
                    {list.map((movie) => (
                    <Poster 
                        key = {movie.id}
                        title = {movie.title}
                        image = {"https://image.tmdb.org/t/p/w300/" + movie.poster_path}
                        year = {showDate(movie.release_date)}
                        overview = {movie.overview}
                        vote_average = {movie.vote_average}
                        vote_count = {movie.vote_count}
                    />
                    ))}
                </div>
            )
        }
        else {
           return (<p> No movie found </p>);
        }
    }

   return(
    <>
    {
        movieResponse(props.movies)
    };
    </>
   );
}

export default MovieList;