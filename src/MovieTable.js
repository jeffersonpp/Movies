import React, {useEffect} from 'react';
import MovieRow from './MovieRow';

function MovieTable(props) {

    useEffect(() => {
        if(props.title === "Favorites") {
            props.lists.setMovies(props.lists.favorites)
        }
        else if(props.title === "Watch Later") {
            props.lists.setMovies(props.lists.watch_later)
        }
    }, [props.lists, props.title]);

    const movieResponse = (list) => {    
        if(list && list.length > 0) {
            return (
                <div className="container">
                    <div className="col-md-8 centralize">

                        <table className="table-dark">
                            <thead>
                                <tr>
                                    <th className="col-md-1">More</th>
                                    <th className="col-md-4">Title</th>
                                    <th className="col-md-2">Year</th>
                                    <th className="col-md-1">Favorite</th>
                                </tr>
                            </thead>
                            <tbody data-testid="container">
                            {list.map((movie) => (
                            <MovieRow 
                                key = {"table_" + movie.id}
                                id = {movie.id}
                                title = {movie.title}
                                poster_path = { movie.poster_path}
                                release_date = {movie.release_date}
                                overview = {movie.overview}
                                vote_average = {movie.vote_average}
                                vote_count = {movie.vote_count}
                                lists = {props.lists}
                            />
                            ))}
                            </tbody>
                        </table>
                    </div>
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

export default MovieTable;