
import './App.css';
import React from 'react';

function Selector(props) {

   return(
    <div onClick={props.onClick} className={props.class}>props.text</div>
   );
}

export default Selector;