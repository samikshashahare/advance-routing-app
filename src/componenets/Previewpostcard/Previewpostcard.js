import React from 'react';
import { Link } from 'react-router-dom';
import './Previewpostcard.css';


function Previewpostcard({id,title,auther,description}) {
  return (
    <div className='cards-container'>
       <div className='bolgcards'>
       <h2>{title}</h2>
        <span>by {auther}</span>
        <p>{description}</p>
        <Link to={`/post/readpost/${id}`} className='btn'>read more</Link>

       </div>
    </div>
  )
}

export default Previewpostcard