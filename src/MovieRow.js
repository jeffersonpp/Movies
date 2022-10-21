
import './App.css';
import React, {useEffect, useState} from 'react';
import Stars from './Stars';
//import { getMovie } from "./actions/movies";
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function MovieRow(props) {
    const [visible, setVisible] = useState(false);

    const buttonText = (visible) => {
        return visible? "Less": "More";
    }

    const hasFavorite = (movie_id) => {
        const has_it = isPresent(props.lists.favorites, movie_id);
        if(has_it) {
            return (
                <Button 
                    onClick={() => removeFavorite(movie_id)}
                    variant="warning"
                    title="Remove From Favorite"
                    data-testid={"remove_favorite_" + movie_id}
                    > Favorites 
                </Button>  ); 
        }
        else {
            return (
                <Button 
                    onClick={() => addFavorite(movie_id)}
                    variant="outline-warning"
                    title="Add to Favorite"
                    data-testid={"add_favorite_" + movie_id}
                    > Favorites 
                </Button>  ); 
            }
      }

    const hasWatchLater = (movie_id) => {
        const has_it = isPresent(props.lists.watch_later, movie_id);
        if(has_it) {
            return (
                <Button 
                    onClick={() => removeWatchLater(movie_id)}
                    variant="primary"
                    title="Remove From Watch later"
                    data-testid={"remove_watch_later_" + movie_id}
                    > Watch Later 
                </Button>  );   
        }
        else {
            return ( 
                <Button 
                    onClick={() => {addWatchLater(movie_id)}}
                    variant="outline-primary"
                    title="Add to Watch later"
                    data-testid={"add_watch_later_" + movie_id}
                    > Watch Later 
                </Button>); 
        }     
    }
    
    const hasStar = (movie_id) => {
        if(isPresent(props.lists.favorites, movie_id)) {
            return (<div className="favorite">  &nbsp;</div>)
        }
        else {
            return (<div className="not-favorite"> &nbsp;</div>)
        }
    }

    const isPresent = (object, id) => {
        for(const item in object) {
            if(object[item].id === id) return true;
        }
        return false;
    }

  const addFavorite = async(movie_id)=>{
    if(!isPresent(props.lists.favorites,movie_id)) {
        let temp = [...props.lists.favorites];
        temp.push({
            'id': props.id, 
            'title':props.title, 
            'poster_path': props.poster_path, 
            'release_date': props.release_date,
            'overview': props.overview,
            'vote_average': props.vote_average,
            'vote_count': props.vote_count
        });
        props.lists.setFavorites(temp);
    }
  }

  const addWatchLater = async(movie_id)=>{
    if(!isPresent(props.lists.watch_later,movie_id)) {
        let temp = [...props.lists.watch_later];
        temp.push({
            'id': props.id, 
            'title': props.title, 
            'poster_path': props.poster_path, 
            'release_date': props.release_date,
            'overview': props.overview,
            'vote_average': props.vote_average,
            'vote_count': props.vote_count
        });
        props.lists.setWatchLater(temp);
    }
  }

  const removeFavorite = async(movie_id)=>{
    let temp = [...props.lists.favorites];
    for(let item in temp) {
        if(temp[item].id === movie_id) {
            temp.splice(item, 1);
        }
    }
    props.lists.setFavorites(temp);
  }

  const removeWatchLater = async(movie_id)=>{
    let temp = [...props.lists.watch_later];
    for(let item in temp) {
        if(temp[item].id === movie_id) {
            temp.splice(item, 1);
        }
    }
      props.lists.setWatchLater(temp);
    }

    const getYear = (date) => {
        let base_date = new Date(date);
        return base_date.getFullYear();
    }

    useEffect(() => {
        props.lists.saveList();
    }, [props.lists]);

   return(
   <tr>
        <td colSpan='100%'  data-testid={"movie_" + props.id}>
            <table className="col-md-12 no-border">
                <tbody>
                    <tr>
                        <td className="col-md-1 ">
                        <Button
                            onClick={() => setVisible(!visible)}
                            aria-controls="example-collapse-text"
                            aria-expanded={visible}
                            data-testid={"collapse_" + props.id}                       
                        >{buttonText(visible)} </Button>                          
                            </td>
                        <td className="col-md-4 ">{props.title || ''} </td>
                        <td className="col-md-2 ">{getYear(props.release_date) || ''} </td>
                        <td className="col-md-1">{hasStar(props.id)}</td>
                    </tr>
                </tbody>
            </table>
            <Collapse in={visible}>
                <div className='poster' data-testid={"poster_" + props.id}>
                    <div className="order"><img src={ "https://image.tmdb.org/t/p/w300/" + props.poster_path} alt={props.title}
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src="./no_image.jpg";
                      }}
                    /></div>
                    <div className="order">
                        <h2>{props.title} <font>({getYear(props.release_date) || ''})</font></h2>
                        <Stars 
                            average = {props.vote_average}
                            votes = {props.vote_count}
                        />
                        <div>{props.overview}</div>
                        <div>
                            {hasWatchLater(props.id)}{' '}
                            {hasFavorite(props.id)}
                        </div>

                    </div>
                </div>
            </Collapse>
        </td>
    </tr>
   );
}

export default MovieRow;