
import './App.css';
import React from 'react';
import Stars from './Stars'

function Poster(props) {

   return(
   <div className='Poster'>
      <img src={props.image} alt={props.title}/>
      <h2>{props.title} <font>({props.year})</font></h2>
      <div>{props.overview}</div>
      <Stars 
         average = {props.vote_average}
         votes = {props.vote_count}
         />
      <div>EVALUATE</div>
   </div>
   );
}

export default Poster;