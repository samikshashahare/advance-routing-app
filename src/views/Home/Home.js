import React from 'react'
import { Link } from 'react-router-dom';
import Posts from '../Posts/Posts';
import './Home.css';

function Home() {
  return (
    <div className='home-container'>
        <h1 className='heading-home'>Home</h1>
        
        <Link to="/posts" className='posts'>posts</Link>

    </div>
  )
}

export default Home