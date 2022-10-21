
import './App.css';
import React from 'react';

function Stars(props) {

    const image = (value) => {
        return (17.5 * value);
    }

   return(
   <div className='stars' title={props.average + "% of " + props.votes + " votes"}>
       <div className='inner_stars' style={{"width": image(props.average) + "px"}} ></div>
   </div>
   );
}

export default Stars;